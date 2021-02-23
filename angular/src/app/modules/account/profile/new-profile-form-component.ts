import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PostProfile, Profile } from '../../../data/profile.model';
@Component({
  selector: 'new-profile-form',
  templateUrl: 'new-profile-form.component.html',
  styleUrls: ['./new-profile-form.component.scss'],
})
export class NewProfileFormComponent implements OnInit {
  showModal = false;

  @Output() newProfile: EventEmitter<PostProfile> = new EventEmitter<PostProfile>();

  ProfileForm = new FormGroup({
    Email: new FormControl('', [
      Validators.required,
      /**   diacritical marks, spaces in name, single quotes   */
      Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"),
    ]),

    GivenName: new FormControl('', [
      Validators.required,
      /** First Name **/
      Validators.pattern(/^[a-zA-z]/)
    ]),
    /** Last Name**/
    FamilyName: new FormControl('', [
      Validators.required,
      Validators.pattern(/^[a-zA-z]/),
    ]),

    Type: new FormControl('', [
      Validators.required,
      /** Adult or Child **/
      Validators.pattern(/adult|child|Adult|Child/),
    ]),
    /** Matches a few numbers, followed by some words */
    ImageUri: new FormControl('', [
      Validators.required,
      Validators.pattern(/^([a-zA-Z\u0080-\u024F]+(?:. |-| |'))*[a-zA-Z\u0080-\u024F]*$/),
    ]),
  });

  /**
   * These getters retrieve the form controls to be used in the template and casts them as a Form control to prevent typechecking errors
   */

  get Email(): FormControl {
    return this.ProfileForm.get('Email') as FormControl;
  }

  get GivenName(): FormControl {
    return this.ProfileForm.get('GivenName') as FormControl;
  }

  get Type(): FormControl {
    return this.ProfileForm.get('Type') as FormControl;
  }

  get ImageURI(): FormControl {
    return this.ProfileForm.get('ImageUri') as FormControl;
  }

  get FamilyName() : FormControl 
  {
    return this.ProfileForm.get('FamilyName') as FormControl;
  }

  constructor() {}

  /**
   * Submit event
   *
   * @event NewProfileformComponent- Triggered by form submission
   *
   */
  onSubmit(): void {
    this.showModal = !this.showModal;
    const profile = {
      email : this.ProfileForm.value.Email,
      givenName: this.ProfileForm.value.GivenName,
      familyName: this.ProfileForm.value.FamilyName,
      type: this.ProfileForm.value.Type, 
      imageUri: this.ProfileForm.value.ImageURI,
    } as Profile;
    this.newProfile.emit(profile);
  }

  ngOnInit(): void {}
}
