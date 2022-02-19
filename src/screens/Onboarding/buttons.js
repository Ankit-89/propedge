const previousButton = {
    text: 'Skip',
    styles: {
      color: '#000',
      borderColor: 'rgba(255, 255, 255, 0.1);',
      backgroundColor: 'rgba(255, 255, 255, 0.1);',
      borderWidth: 1,
    },
  };
  
  const nextButton = {
    text: 'Next',
    styles: {
      backgroundColor: '#fff',
      borderColor: '#fff',
      borderWidth: 2,
      color: '#000'
    },
  };
  
  const doneButton = {
    text: 'Get Started',
    styles: {
      borderColor: '#fff',
      backgroundColor: '#fff',
      borderWidth: 1,
      color: '#000'
    },
    onPress: async function handleDone() {
      console.log('Continue button was clicked');
    },
  };
  
  export default { previousButton, nextButton, doneButton };