window.addEventListener('load', () => {
    let skillsContainer = select('.skills-container');
    if (skillsContainer) {
      let skillsIsotope = new Isotope(skillsContainer, {
        itemSelector: '.skills-item'
      });

      let skillsFilters = select('#skills-flters li', true);

      on('click', '#skills-flters li', function(e) {
        e.preventDefault();
        skillsFilters.forEach(function(el) {
          el.classList.remove('filter-active');
        });
        this.classList.add('filter-active');

        skillsIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });
        skillsIsotope.on('arrangeComplete', function() {
          AOS.refresh()
        });
      }, true);
    }

  });