window.addEventListener('DOMContentLoaded', function() {
    var textContainer = document.querySelector('.base-detials .child-4');
    var largeText = document.querySelector('.base-detials .child-4 .sub-description');
    var readMoreLink = document.querySelector('.read-more');
    
    if (largeText.scrollHeight > textContainer.clientHeight) {
      readMoreLink.style.display = 'block';
    }
    
    readMoreLink.addEventListener('click', function(e) {
      e.preventDefault();
      textContainer.style.maxHeight = 'none';
      largeText.classList.add('full-text');
      readMoreLink.style.display = 'none';
    });
  });