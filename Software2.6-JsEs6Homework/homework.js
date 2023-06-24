const colours = [
    {
      color: "red",
      value: "#f00"
    },
    {
      color: "green",
      value: "#0f0"
    },
    {
      color: "blue",
      value: "#00f"
    },
    {
      color: "cyan",
      value: "#0ff"
    },
    {
      color: "magenta",
      value: "#f0f"
    },
    {
      color: "yellow",
      value: "#ff0"
    },
    {
      color: "black",
      value: "#000"
    }
  ];
  
  const targetDiv = document.querySelector("#target");
  const stopCheckbox = document.querySelector("#stopCheckbox");
  
  let currentIndex = 0;
  let intervalId;
  
  const changeColor = () => {
    const { value } = colours[currentIndex];
    targetDiv.style.backgroundColor = value;
    currentIndex = (currentIndex + 1) % colours.length;
  
    if (currentIndex === 0 && stopCheckbox.checked) {
      clearInterval(intervalId);
    }
  };
  
  intervalId = setInterval(changeColor, 1000);