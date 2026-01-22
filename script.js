lookerStudio.visualizations.add({
  id: 'advanced_kpi',

  label: 'Advanced KPI Scorecard',

  options: {},

  create: function(element, config) {},

  updateAsync: function(data, element, config, queryResponse, details, done) {

    // Get metrics
    const actual = data.tables.DEFAULT[0].metrics[0].value;
    const target = data.tables.DEFAULT[0].metrics[1].value;

    // Calculate variance %
    const variancePct = ((actual - target) / target) * 100;

    // Update UI
    document.getElementById('actual').innerText = actual;
    document.getElementById('target').innerText = 'Target: ' + target;
    document.getElementById('variance').innerText =
      variancePct.toFixed(1) + '%';

    const card = document.getElementById('kpi');

    // Color logic
    if (variancePct >= 0) {
      card.classList.add('green');
      card.classList.remove('red');
    } else {
      card.classList.add('red');
      card.classList.remove('green');
    }

    done();
  }
});
