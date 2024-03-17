<template>
    <div>
      <h1>Oops, une erreur est survenue</h1>
      <p>{{ errorMessage }}</p>
    </div>
  </template>
  
  <script>
  export default {
    name: "ErrorPage",
    props: {
      errorMessage: {
        type: String,
        default: "Page non trouvée",
      },
    },
  };
  </script>
  