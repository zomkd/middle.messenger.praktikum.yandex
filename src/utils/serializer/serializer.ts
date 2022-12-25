import { validate } from '../validator/validator';

export function serializer(event: Event, fields: string[]): any {
  event.preventDefault();
  const formData: { [index: string]: any } = {};
  let isFormValid = true;
  fields.map((field) => {
    const el = document.getElementsByName(field)[0];
    if (validate(el as HTMLInputElement)) {
      isFormValid = false;
      // el.classList.add(this.props.styles['input-error']);
    } else {
      const name = el.getAttribute('name');
      const { value } = el as HTMLInputElement;
      if (name) {
        formData[name] = value;
      }
    }
  });
  if (isFormValid) {
    return formData;
  }
  return;
}
