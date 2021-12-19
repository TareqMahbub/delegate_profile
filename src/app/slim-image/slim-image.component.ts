import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-slim-image',
  templateUrl: './slim-image.component.html',
  styleUrls: ['./slim-image.component.css'],
})
export class SlimImageComponent implements OnInit {
  uploadedImagePath = '';
  constructor(private toastrService: ToastrService) {}

  ngOnInit(): void {}

  slimOptions = {
    ratio: '1:1',
    upload: true,
    initialImage: '/assets/profile.png',
    service: this.slimService.bind(this),
    didInit: this.slimInit.bind(this),
  };

  // called when slim has initialized
  slimInit(data: any, slim: any) {
    // slim instance reference
    console.log(slim);

    // current slim data object and slim reference
    console.log(data);
  }

  // called when upload button is pressed or automatically if push is enabled
  slimService(
    formdata: any,
    progress: any,
    success: any,
    failure: any,
    slim: any
  ) {
    const parent = this;

    console.log(slim.data);

    if (slim.data.input.type != 'image/jpeg') {
      parent.toastrService.error(
        'Please refersh and try again',
        'Only JPG/JPEG allowed'
      );
      return;
    }

    const fileSize = Math.floor(slim.data.input.size / 1024 / 1024);
    if (fileSize > 2048) {
      parent.toastrService.error(
        'Filesize must be less than 2MB',
        `Large file ${fileSize} MB!`
      );
      return;
    }

    axios
      .post('https://s5284flopg.execute-api.ap-south-1.amazonaws.com/prod', {
        name: slim.data.input.name,
        image: slim.dataBase64.output.image,
      })
      .then(function (response: any) {
        if (response.data.status == 'success') {
          parent.toastrService.success(
            'Upload to S3 successful! See link below!',
            'Successfully uploaded!'
          );
          parent.uploadedImagePath = response.data.path;
        } else {
          parent.toastrService.error(response.data.message, 'Upload failed!');
        }
      })
      .catch(function (error: any) {
        parent.toastrService.error(
          'Profile image upload failed',
          'Upload failed!'
        );
        console.log(error);
      });
  }
}
