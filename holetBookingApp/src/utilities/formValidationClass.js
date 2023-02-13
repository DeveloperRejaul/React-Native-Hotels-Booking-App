class FromValidation {
  constructor() {
    this.Email = '';
    this.PhoneNumber = '';
    this.Password = '';
    this.UserName = '';
    this.Gender = '';
    this.BirthDate = {
      DAY: '',
      MM: '',
      YEAR: '',
    };
    //
    this.validateEmail = false;
    this.validatePhoneNumber = false;
    this.validatePassword = false;
    this.validateGender = false;
    this.validateUserName = false;
    this.validateBirthDate = {
      DAY: false,
      MM: false,
      YEAR: false,
    };
  }

  // User name functinality
  userName(name) {
    const stringVaue = String(name);

    const validateName = stringVaue.length <= 4 ? false : true;
    const backgroundColor =
      (validateName.length === 0) | validateName ? '#f7f7f7' : '#ffe7da';

    this.UserName = validateName && name;
    this.validateUserName = validateName && true;

    return {backgroundColor};
  }

  // Password validation functinality
  password(data) {
    const pass = data.length >= 8 ? true : false;
    const backgroundColor = (data.length === 0) | pass ? '#f7f7f7' : '#ffe7da';

    return {pass, backgroundColor};
  }
  comfirmPassword(pass1, pass2) {
    const confirmPass = pass1 === pass2 ? true : false;
    const backgroundColor =
      (pass2.length === 0) | confirmPass ? '#f7f7f7' : '#ffe7da';

    this.Password = confirmPass && pass2;
    this.validatePassword = confirmPass;
    return {confirmPass, backgroundColor};
  }

  // Email validation functinality
  email(email) {
    const pattarn =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    const validateEmail = pattarn.test(email);
    const backgroundColor =
      (email.length === 0) | validateEmail ? '#f7f7f7' : '#ffe7da';

    this.Email = validateEmail && email;
    this.validateEmail = validateEmail;
    return {backgroundColor, validateEmail};
  }

  // Bangladeshi phone number validation
  phoneNumper(number) {
    const pattan = /(^(\+88|0088)?(01){1}[3456789]{1}(\d){8})$/;

    const validateNumber = pattan.test(number);
    const backgroundColor =
      (number.length === 0) | validateNumber ? '#f7f7f7' : '#ffe7da';

    this.PhoneNumber = validateNumber && number;
    this.validatePhoneNumber = validateNumber;
    return {backgroundColor, validateNumber};
  }

  // Gender Validation
  gender(data) {
    const stringData = String(data).toLocaleLowerCase();

    const validationFnc = data => {
      switch (data) {
        case 'male':
          return true;
          break;
        case 'female':
          return true;
          break;
        case 'Transgender':
          return true;
          break;

        default:
          return false;
          break;
      }
    };
    const validateData = validationFnc(stringData);

    const backgroundColor =
      (stringData.length === 0) | validateData ? '#f3f3f3a4' : '#ffe7da';

    this.Gender = validateData && stringData;
    this.validateGender = validateData;
    return {backgroundColor, validateData};
  }

  // Birth Date Validation Start
  dateDay(value) {
    const dayFnc = value => {
      if (value <= 31) {
        return true;
      } else {
        return false;
      }
    };
    const validateDay = dayFnc(value);
    const daybgcolor = validateDay ? '#f3f3f3a4' : '#ffe7da';

    this.BirthDate.DAY = validateDay && value;
    this.validateBirthDate.DAY = validateDay && true;
    return {daybgcolor};
  }
  dateMonth(value) {
    const MonthFnc = value => {
      if (value <= 12) {
        return true;
      } else {
        return false;
      }
    };
    const validateMonth = MonthFnc(value);
    const monthbgcolor = validateMonth ? '#f3f3f3a4' : '#ffe7da';
    this.BirthDate.MM = validateMonth && value;
    this.validateBirthDate.MM = validateMonth && true;
    return {monthbgcolor};
  }
  dateYear(value) {
    const yearFnc = value => {
      if (value.length == 4) {
        return true;
      } else {
        return false;
      }
    };
    const validateyear = yearFnc(value);
    const yearbgcolor = validateyear ? '#f3f3f3a4' : '#ffe7da';
    this.BirthDate.YEAR = validateyear && value;
    this.validateBirthDate.MM = validateyear && true;
    return {yearbgcolor};
  }
  // Birth Date Validation Ends

  // Signup button functionality
  signupBTN() {
    const signUpOk =
      this.validateEmail & this.validatePhoneNumber & this.validatePassword
        ? true
        : false;

    // console.log('phonr Number', this.validatePhoneNumber);
    // console.log('Email', this.validateEmail);
    // console.log('Password ', this.validatePassword);

    // console.log('phonr Number', this.PhoneNumber);
    // console.log('Email', this.Email);
    // console.log('Password ', this.Password);
    // console.log('User Name ', this.UserName);

    const phoneNumber = this.PhoneNumber;
    const password = this.Password;
    const email = this.Email;
    const userName = this.UserName;

    return {signUpOk, phoneNumber, password, email, userName};
  }

  // Edit Profile data
  editeProfileBtn() {
    const isOK =
      this.validateUserName &
      this.validateEmail &
      this.validatePhoneNumber &
      this.validateGender &
      this.validateBirthDate.DAY &
      this.validateBirthDate.MM &
      this.validateBirthDate.MM
        ? true
        : false;

    const userName = this.UserName;
    const email = this.Email;
    const phoneNumber = this.PhoneNumber;
    const gender = this.Gender;
    const dateDay = this.BirthDate.DAY;
    const dateMonth = this.BirthDate.MM;
    const dateYears = this.BirthDate.YEAR;

    return {
      userName,
      email,
      phoneNumber,
      gender,
      dateDay,
      dateMonth,
      dateYears,
      isOK,
    };
  }
}

const formValidation = new FromValidation();
export {formValidation};
