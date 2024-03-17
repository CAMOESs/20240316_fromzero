/** @format */

export default defineNuxtPlugin(({}) => {
  return {
    provide: {
      formData: (form: unknown, data: unknown, parentKey: unknown) => {
        return (function formData(form, data, parentKey) {
          try {
            if (Array.isArray(data)) {
              if (data.every((value) => !(value instanceof File))) {
                formData(form, JSON.stringify(data), `${parentKey}`);
              } else {
                for (let iterator of data) {
                  formData(form, iterator, `${parentKey}`);
                }
              }
            } else if (data instanceof Object && !(data instanceof File)) {
              for (const [key, value] of Object.entries(data)) {
                let name = Number.isNaN(parseInt(key))
                  ? parentKey
                    ? `${parentKey}[${key}]`
                    : key
                  : parentKey;
                formData(form, value, name);
              }
            } else {
              if (data) {
                //@ts-ignore 
                form.append(parentKey, data);
              }
            }
          } catch (error) {
            // console.log(error);
          }
          return form;
        })(form, data, parentKey);
      },
    },
  };
});
