
let divDisplay = document.createElement('div');
divDisplay.id = "display";
divDisplay.className = "container"
document.body.append(divDisplay);
setTimeout(() => {
  document.getElementById("display").textContent = "10";
  setTimeout(() => {
    document.getElementById("display").textContent = "9";
    setTimeout(() => {
      document.getElementById("display").textContent = "8";
      setTimeout(() => {
        document.getElementById("display").textContent = "7";
        setTimeout(() => {
          document.getElementById("display").textContent = "6";
          setTimeout(() => {
            document.getElementById("display").textContent = "5";
            setTimeout(() => {
              document.getElementById("display").textContent = "4";
              setTimeout(() => {
                document.getElementById("display").textContent = "3";
                setTimeout(() => {
                  document.getElementById("display").textContent = "2";
                  setTimeout(() => {
                    document.getElementById("display").textContent = "1";
                    setTimeout(() => {
                      document.getElementById("display").textContent =
                        "Happy Independence Day!";
                    }, 1000);
                  }, 1000);
                }, 1000);
              }, 1000);
            }, 1000);
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);
