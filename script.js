function resizeMap () {
      const img = document.querySelector('img[usemap="#workmap"]');
      const map = document.querySelector('map[name="workmap"]');
      const areas = map.querySelectorAll('area');

      const w = img.naturalWidth;
      const h = img.naturalHeight;
      const wPercent = img.offsetWidth / w;
      const hPercent = img.offsetHeight / h;

      areas.forEach(area => {
          let coords = area.dataset.coords.split(',').map(Number);
          for (let i = 0; i < coords.length; i += 2) {
              coords[i] *= wPercent;
              coords[i + 1] *= hPercent;
          }
          area.coords = coords.map(c => Math.round(c)).join(',');
      });
  }

  window.addEventListener('resize', resizeMap);
  window.addEventListener('load', () => {
      document.querySelectorAll('area').forEach(area => {
          area.dataset.coords = area.coords; // сохраняем оригинал
      });
      resizeMap();
      });
