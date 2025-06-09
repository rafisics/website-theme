document.addEventListener('DOMContentLoaded', function() {
    const readMoreLinks = document.querySelectorAll('.read-more, .read-less');
    
    readMoreLinks.forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        const quoteBlock = this.closest('.collapsible-text');
        const short = quoteBlock.querySelector('.text-short');
        const full = quoteBlock.querySelector('.text-full');
        
        if (this.classList.contains('read-more')) {
          short.style.display = 'none';
          full.style.display = 'block';
        } else {
          short.style.display = 'block';
          full.style.display = 'none';
        }
      });
    });
});
