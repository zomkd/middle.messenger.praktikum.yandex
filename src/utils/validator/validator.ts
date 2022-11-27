export enum FieldName {
  Login = 'login',
  Password = 'password',
  Email = 'email',
  RepeatPassword = 'repeatPassword',
  FirstName = 'first_name',
  SecondName = 'second_name',
  Phone = 'phone',
  OldPassword = 'oldPassword',
  NewPassword = 'newPassword',
  Message = 'message',
}

export function validate(element: HTMLInputElement) {
  const { name, value } = element;

  if (name === FieldName.Login) {
    const isTextLoginValid = /^([0-9]*[a-zA-Z\-_][0-9]*)+$/.test(value);
    const isLengthLoginValid = value.length >= 3 && value.length < 20;
    if (!isLengthLoginValid || !isTextLoginValid) {
      // if (value.length === 0) return false;
      return true;
    }
    return null;
  }

  if (
    name === FieldName.Password ||
    name === FieldName.RepeatPassword ||
    name === FieldName.OldPassword ||
    name === FieldName.NewPassword
  ) {
    const isValidText = /^(.*([A-Z]+.*[0-9]+|[0-9]+.*[A-Z]+).*)+$/.test(value);
    const isValidLength = value.length >= 8 && value.length < 40;

    if (!isValidText || !isValidLength) {
      // if (value.length === 0) return false;
      return true;
    }
    return null;
  }

  if (name === FieldName.FirstName || name === FieldName.SecondName) {
    const isValidValue = /^[A-ZА-Я][a-zA-Zа-яА-Я-]*$/.test(value);

    if (!isValidValue) {
      // if (value.length === 0) return false;
      return true;
    }

    return null;
  }

  if (name === FieldName.Email) {
    const isValidValue = /^([\w-.]+@[a-zA-Z]+.[a-z]+)$/.test(value);

    if (!isValidValue) {
      // if (value.length === 0) return false;
      return true;
    }

    return null;
  }

  if (name === FieldName.Phone) {
    const isValidValue = /^\+*[\d]{10,15}$/.test(value);

    if (!isValidValue) {
      // if (value.length === 0) return false;
      return true;
    }

    return null;
  }

  if (name === FieldName.Message) {
    const isValidLength = value.length > 0;

    if (!isValidLength) {
      // if (value.length === 0) return false;
      return true;
    }

    return null;
  }
}
