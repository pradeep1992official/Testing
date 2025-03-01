var url;
var myWindow;

function urlOpen() {
  url = document.getElementById("urlInput").value;
  // var newWindow;
  if (url) {
    myWindow = window.open(url, "_blank");
    appendAlert('Window Opened', 'success');
  } else {
    appendAlert('Enter Email ID', 'success');
  }
}

function urlClose() {
  if (myWindow) {
    myWindow.close();
    myWindow = null;
    appendAlert('Window Closed', 'secondary');
  } else {
    appendAlert('No Window is Open', 'primary');;
  }
}

function urlCheck() {
  if (myWindow && !myWindow.closed) {
    appendAlert('The Window is still Open', 'warning');
  } else {
    appendAlert('The Window is Closed', 'danger');
  }
}

const alertPlaceholder = document.getElementById('liveAlertPlaceholder')
const appendAlert = (message, type) => {
  const wrapper = document.createElement('div')
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
  ].join('')

  alertPlaceholder.append(wrapper)
}

