var ArtefactCosts = [1, 2, 4, 8, 16, 35, 70, 125, 250, 500, 1000, 2000, 4000, 8000, 16000, 32000, 64000, 128000, 256000, 512000, 650000, 800000, 1000000, 1000000, 1000000, 1000000];
var Artefacts = {
  'Rozh Gemstone': {
    'order': 0,
    'name': 'Rozh Gemstone',
    'weight': 0,
    'maxLevel': 0,
    'costFactor': 'Exponential-1.25',
    'effectFactor': .5,
    'effectBaseValue': .5,
    'costLevelModifier': -1,
    'effectLabel': 'Rune Multiplier',
    'effectPreSymbol': '',
    'effectPostSymbol': 'X',
    'url': 'http://runeblade.wikia.com/wiki/Rozh_Gemstone'
  },
  'Etraxxan Wristband': {
    'order': 1,
    'name': 'Etraxxan Wristband',
    'weight': 1,
    'maxLevel': 0,
    'costFactor': 'Linear-1',
    'effectFactor': 30,
    'effectBaseValue': 0,
    'costLevelModifier': 0,
    'effectLabel': 'TAP ATK Bonus',
    'effectPreSymbol': '',
    'effectPostSymbol': '%',
    'url': 'http://runeblade.wikia.com/wiki/Etraxxan_Wristband'
  },
  'Samadun Runic Stone': {
    'order': 2,
    'name': 'Samadun Runic Stone',
    'weight': 1,
    'maxLevel': 0,
    'costFactor': 'Linear-1',
    'effectFactor': 20,
    'effectBaseValue': 0,
    'costLevelModifier': 0,
    'effectLabel': 'DPS ATK Bonus',
    'effectPreSymbol': '',
    'effectPostSymbol': '%',
    'url': 'http://runeblade.wikia.com/wiki/Samadun_Rune_Stone'
  },
  'Headband of Perception': {
    'order': 3,
    'name': 'Headband of Perception',
    'weight': 1,
    'maxLevel': 0,
    'costFactor': 'Linear-1',
    'effectFactor': 15,
    'effectBaseValue': 0,
    'costLevelModifier': 0,
    'effectLabel': 'Gold Increase',
    'effectPreSymbol': '',
    'effectPostSymbol': '%',
    'url': 'http://runeblade.wikia.com/wiki/Headband_of_Perception'
  },
  'Ring of Odagh': {
    'order': 4,
    'name': 'Ring of Odagh',
    'weight': 1,
    'maxLevel': 10,
    'costFactor': 'Linear-1',
    'effectFactor': 2,
    'effectBaseValue': 3,
    'costLevelModifier': 0,
    'effectLabel': 'TAP Length (in seconds)',
    'effectPreSymbol': '',
    'effectPostSymbol': '',
    'url': 'http://runeblade.wikia.com/wiki/Ring_of_Odagh'
  },
  'Nanzuum Mana Cube': {
    'order': 5,
    'name': 'Nanzuum Mana Cube',
    'weight': 1,
    'maxLevel': 10,
    'costFactor': 'Linear-1',
    'effectFactor': 5,
    'effectBaseValue': 0,
    'costLevelModifier': 0,
    'effectLabel': 'Spell Cooldown',
    'effectPreSymbol': '-',
    'effectPostSymbol': '%',
    'url': 'http://runeblade.wikia.com/wiki/Nanzuum_Mana_Cube'
  },
  'Nocri Orb of Teleportation': {
    'order': 6,
    'name': 'Nocri Orb of Teleportation',
    'weight': 1,
    'maxLevel': 0,
    'costFactor': 'Nocri-1.5',
    'effectFactor': 1,
    'effectBaseValue': 1,
    'costLevelModifier': 0,
    'effectLabel': 'Starting LV.',
    'effectPreSymbol': '',
    'effectPostSymbol': '',
    'url': 'http://runeblade.wikia.com/wiki/Nocri_Orb_of_Teleportation'
  },
  'Thegian Pendant of Stealth': {
    'order': 7,
    'name': 'Thegian Pendant of Stealth',
    'weight': 1,
    'maxLevel': 5,
    'costFactor': 'Linear-10',
    'effectFactor': 1,
    'effectBaseValue': 0,
    'costLevelModifier': 0,
    'effectLabel': 'Enemies Evaded',
    'effectPreSymbol': '',
    'effectPostSymbol': '/10',
    'url': 'http://runeblade.wikia.com/wiki/Thegian_Pendant_of_Stealth'
  },
  'Arai Talisman': {
    'order': 8,
    'name': 'Arai Talisman',
    'weight': 1,
    'maxLevel': 25,
    'costFactor': 'Exponential-1.5',
    'effectFactor': 1,
    'effectBaseValue': 25,
    'costLevelModifier': 0,
    'effectLabel': 'Master Guardian Encounter',
    'effectPreSymbol': '',
    'effectPostSymbol': '%',
    'url': 'http://runeblade.wikia.com/wiki/Arai_Talisman'
  },
  'Loan Agreement': {
    'order': 9,
    'name': 'Loan Agreement',
    'weight': 1,
    'maxLevel': 100,
    'costFactor': 'Exponential-1.5',
    'effectFactor': -999,
    'effectBaseValue': 1000,
    'costLevelModifier': 0,
    'effectLabel': 'Starting Gold',
    'effectPreSymbol': '',
    'effectPostSymbol': '',
    'url': 'http://runeblade.wikia.com/wiki/Loan_Agreement'
  },
  'Mana Shard': {
    'order': 10,
    'name': 'Mana Shard',
    'weight': 1,
    'maxLevel': 0,
    'costFactor': 'Exponential-1.5',
    'effectFactor': 2,
    'effectBaseValue': 0,
    'costLevelModifier': 0,
    'effectLabel': 'Crystal Loot Increase',
    'effectPreSymbol': '',
    'effectPostSymbol': '%',
    'url': 'http://runeblade.wikia.com/wiki/Mana_Shard'
  },
  'Spell Booster Charm: Invigorate': {
    'order': 11,
    'name': 'Spell Booster Charm: Invigorate',
    'weight': 1,
    'maxLevel': 4,
    'costFactor': 'Exponential-3',
    'effectFactor': 1,
    'effectBaseValue': 1,
    'costLevelModifier': 0,
    'effectLabel': 'Cooldown Removed From',
    'effectPreSymbol': '',
    'effectPostSymbol': ' spells',
    'url': 'http://runeblade.wikia.com/wiki/Spell_Booster_Charm:_Invigorate'
  },
  'Spell Booster Charm: Tap Life': {
    'order': 12,
    'name': 'Spell Booster Charm: Tap Life',
    'weight': 1,
    'maxLevel': 30,
    'costFactor': 'Exponential-1.5',
    'effectFactor': 0.5,
    'effectBaseValue': 15,
    'costLevelModifier': 0,
    'effectLabel': 'Tap Life Duration',
    'effectPreSymbol': '',
    'effectPostSymbol': 'm',
    'url': 'http://runeblade.wikia.com/wiki/Spell_Booster_Charm:_Tap_Life'
  },
  'Spell Booster Charm: Dark Alchemy': {
    'order': 13,
    'name': 'Spell Booster Charm: Dark Alchemy',
    'weight': 1,
    'maxLevel': 10,
    'costFactor': 'Exponential-3',
    'effectFactor': 1,
    'effectBaseValue': 20,
    'costLevelModifier': 0,
    'effectLabel': 'Dark Alchemy Duration',
    'effectPreSymbol': '',
    'effectPostSymbol': 's',
    'url': 'http://runeblade.wikia.com/wiki/Spell_Booster_Charm:_Dark_Alchemy'
  },
  'Spell Booster Charm: Fireblade': {
    'order': 14,
    'name': 'Spell Booster Charm: Fireblade',
    'weight': 1,
    'maxLevel': 150,
    'costFactor': 'Exponential-1.5',
    'effectFactor': 2,
    'effectBaseValue': 30,
    'costLevelModifier': 0,
    'effectLabel': 'Fireblade Duration',
    'effectPreSymbol': '',
    'effectPostSymbol': 's',
    'url': 'http://runeblade.wikia.com/wiki/Spell_Booster_Charm:_Fireblade'
  },
  'Cursed Divining Rod': {
    'order': 15,
    'name': 'Cursed Divining Rod',
    'weight': 1,
    'maxLevel': 6,
    'costFactor': 'Exponential-3',
    'effectFactor': 1,
    'effectBaseValue': 0,
    'costLevelModifier': 0,
    'effectLabel': 'Chests Detected',
    'effectPreSymbol': '',
    'effectPostSymbol': '',
    'url': 'http://runeblade.wikia.com/wiki/Cursed_Divining_Rod'
  },
  'Rune BT: Rozh Gemstone': {
    'order': 16,
    'name': 'Rune BT: Rozh Gemstone',
    'weight': 1,
    'maxLevel': 40,
    'costFactor': 'Linear-1',
    'effectFactor': -2,
    'effectBaseValue': 0,
    'costLevelModifier': 0,
    'effectLabel': 'Rozh Cost Reduction',
    'effectPreSymbol': '',
    'effectPostSymbol': '%',
    'url': 'http://runeblade.wikia.com/wiki/Rune_Booster_Charm:_Rozh_Gemstone'
  },
  'Umbaorian Amulet': {
    'order': 17,
    'name': 'Umbaorian Amulet',
    'weight': 1,
    'maxLevel': 0,
    'costFactor': 'Exponential-1.5',
    'effectFactor': 1,
    'effectBaseValue': 0,
    'costLevelModifier': 0,
    'effectLabel': 'Next Gen Starting Bonus',
    'effectPreSymbol': '',
    'effectPostSymbol': '%',
    'url': 'http://runeblade.wikia.com/wiki/Umbaorian_Amulet'
  },
  'Mauhak Battle Focus': {
    'order': 18,
    'name': 'Mauhak Battle Focus',
    'weight': 1,
    'maxLevel': 0,
    'costFactor': 'Exponential-1.5',
    'effectFactor': 1,
    'effectBaseValue': 30,
    'costLevelModifier': 0,
    'effectLabel': 'Guardian Battle Duration',
    'effectPreSymbol': '',
    'effectPostSymbol': 's',
    'url': 'http://runeblade.wikia.com/wiki/Mauhak_Battle_Focus'
  },
  'Ring of Engagement': {
    'order': 19,
    'name': 'Ring of Engagement',
    'weight': 1,
    'maxLevel': 0,
    'costFactor': 'Exponential-1.5',
    'effectFactor': 1,
    'effectBaseValue': 0,
    'costLevelModifier': 0,
    'effectLabel': 'DPS Converted to TAP',
    'effectPreSymbol': '',
    'effectPostSymbol': '%',
    'url': 'http://runeblade.wikia.com/wiki/Ring_of_Engagement'
  },
  'Mithrode Jewel': {
    'order': 20,
    'name': 'Mithrode Jewel',
    'weight': 1,
    'maxLevel': 0,
    'costFactor': 'Exponential-1.5',
    'effectFactor': 1,
    'effectBaseValue': 0,
    'costLevelModifier': 0,
    'effectLabel': 'DPS Increase / Hr',
    'effectPreSymbol': '',
    'effectPostSymbol': '%',
    'url': 'http://runeblade.wikia.com/wiki/Mithrode_Jewel'
  },
  'Fury Goader': {
    'order': 21,
    'name': 'Fury Goader',
    'weight': 1,
    'maxLevel': 90,
    'costFactor': 'Exponential-2',
    'effectFactor': 1,
    'effectBaseValue': 0,
    'costLevelModifier': 0,
    'effectLabel': 'Critical Hit Probability',
    'effectPreSymbol': '',
    'effectPostSymbol': '%',
    'url': 'http://runeblade.wikia.com/wiki/Fury_Goader'
  },
  'Death Hex': {
    'order': 22,
    'name': 'Death Hex',
    'weight': 1,
    'maxLevel': 25,
    'costFactor': 'Exponential-3',
    'effectFactor': -1,
    'effectBaseValue': 100,
    'costLevelModifier': 0,
    'effectLabel': 'Enemy Starting Health',
    'effectPreSymbol': '',
    'effectPostSymbol': '%',
    'url': 'http://runeblade.wikia.com/wiki/Death_Hex'
  },
  'Warriors Periapt': {
    'order': 23,
    'name': 'Warriors Periapt',
    'weight': 1,
    'maxLevel': 0,
    'costFactor': 'Exponential-1.5',
    'effectFactor': 1,
    'effectBaseValue': 0,
    'costLevelModifier': 0,
    'effectLabel': 'TAP Incease / Endurance',
    'effectPreSymbol': '',
    'effectPostSymbol': '%',
    'url': 'http://runeblade.wikia.com/wiki/Warrior%27s_Periapt'
  },
  'Focus of Elevation': {
    'order': 24,
    'name': 'Focus of Elevation',
    'weight': 1,
    'maxLevel': 0,
    'costFactor': 'Elevation-1',
    'effectFactor': .1,
    'effectBaseValue': 0,
    'costLevelModifier': 0,
    'effectLabel': 'DPS & TAP Increase / Level',
    'effectPreSymbol': '',
    'effectPostSymbol': '%',
    'url': 'http://runeblade.wikia.com/wiki/Focus_of_Elevation'
  },
  'Rozh Harmonizer': {
    'order': 25,
    'name': 'Rozh Harmonizer',
    'weight': 1,
    'maxLevel': 100,
    'costFactor': 'Exponential-2',
    'effectFactor': 1,
    'effectBaseValue': 50,
    'costLevelModifier': 0,
    'effectLabel': 'Rozh Gemstone Boost / LV.',
    'effectPreSymbol': '',
    'effectPostSymbol': '%',
    'url': 'http://runeblade.wikia.com/wiki/Rozh_Harmonizer'
  },
  'Monocle of Myrech': {
    'order': 26,
    'name': 'Monocle of Myrech',
    'weight': 1,
    'maxLevel': 20,
    'costFactor': 'Myrech-7500',
    'effectFactor': 1,
    'effectBaseValue': 75,
    'costLevelModifier': 0,
    'effectLabel': 'Artefact Resale Value',
    'effectPreSymbol': '',
    'effectPostSymbol': '%',
    'url': 'http://runeblade.wikia.com/wiki/Monocle_of_Myrech'
  }
};

var ExistingArtefacts = 0;
var ArtefactsTotal = 0;
var CrystalsToSpend = 0;
var CrystalsSpentBuying = 0;
var CrystalsSpentUpgrading = 0;
var CrystalsRemaining = 0;
var CookieExpireDays = 30;

function initializePage() {
  // var divTableObject = document.getElementById('ArtefactTableDiv');
  var divTableObject = $('#ArtefactTableDiv');
  for (var artefactName in Artefacts) {
    var artefactObject = Artefacts[artefactName];
    var artefactName = artefactObject['name'];

    var artefactDiv = $('<div>')
      .attr({
        'id': artefactName + ' Div',
        'class': 'div-table-row'
      }).append($('<div>')
        .attr({
          'class': 'div-table-col-label'
        }).append($('<a>')
          .attr({
            'target': '_blank',
            'href': artefactObject['url']
          }).text(artefactName)
        ));

    if (artefactObject['weight'] == 1)
      artefactDiv.append(
        $('<div>').attr({
          'class': 'div-table-col-value',
          'name': artefactName
        }).append($('<a>')
          .click(function() {
            var name = $(this).parent().attr('name');
            changeArtefactCurrentLevel(name, -5);
          }).text('«'))
        .append($('<a>')
          .click(function() {
            var name = $(this).parent().attr('name');
            changeArtefactCurrentLevel(name, -1);
          }).text('-'))
        .append($('<input>')
          .attr({
            'type': 'number',
            'id': artefactName + ' Current Level',
            'class': 'current-level',
            'value': 0
          }))
        .append($('<a>')
          .click(function() {
            var name = $(this).parent().attr('name');
            changeArtefactCurrentLevel(name, 1);
          }).text('+'))
        .append($('<a>')
          .click(function() {
            var name = $(this).parent().attr('name');
            changeArtefactCurrentLevel(name, 5);
          }).text('»'))
      );

    else
      artefactDiv.append(
        $('<div>').attr({
          'class': 'div-table-col-value'
        }).html('&nbsp;')
      )

    artefactDiv.append($('<div>')
      .attr({
        'class': 'div-table-col-value',
        'name': artefactName
      }).append($('<a>')
        .click(function() {
          var name = $(this).parent().attr('name');
          changeArtefactUpgradedLevel(name, -5);
        }).text('«'))
      .append($('<a>')
        .click(function() {
          var name = $(this).parent().attr('name');
          changeArtefactUpgradedLevel(name, -1);
        }).text('-'))
      .append($('<input>')
        .attr({
          'type': 'number',
          'id': artefactName + ' Upgraded Level',
          'class': 'upgraded-level',
          'value': 0
        }))
      .append($('<a>')
        .click(function() {
          var name = $(this).parent().attr('name');
          changeArtefactUpgradedLevel(name, 1);
        }).text('+'))
      .append($('<a>')
        .click(function() {
          var name = $(this).parent().attr('name');
          changeArtefactUpgradedLevel(name, 5);
        }).text('»'))
    );
    artefactDiv.append($('<div>')
      .attr({
        'class': 'div-table-col-value'
      }).append($('<strong>')
        .attr({
          'id': artefactName + ' Percentage',
          'class': 'percentage'
        }).text('0')
      ));

    artefactDiv.append($('<div>')
      .attr({
        'class': 'div-table-col-value'
      }).append($('<strong>')
        .attr({
          'id': artefactName + ' Cost'
        }).text('0')
      ));

    artefactDiv.append($('<div>')
      .attr({
        'class': 'div-table-col-effect'
      }).append($('<strong>')
        .attr({
          'id': artefactName + ' Effect'
        }).text(artefactObject['effectLabel'] + ': ')
      ));

    artefactObject['currentLevel'] = 0;
    artefactObject['upgradedLevel'] = 0;
    artefactObject['upgradeCost'] = 0;
    artefactObject['artefactDiv'] = artefactDiv[0];
    // setArtefactOwnership(artefactObject, 0);
    divTableObject.append(artefactDiv);
  }
  document.getElementById('CrystalsSpentBuying').setAttribute("readonly", "true");
  document.getElementById('CrystalsSpentUpgrading').setAttribute("readonly", "true");
  document.getElementById('CrystalsRemaining').setAttribute("readonly", "true");

  var queryString = decodeURIComponent(window.location.search.substring(1));
  if (queryString.match(/\bs=(((c|,a)[0-9]*:[0-9]+\-?[0-9]*)+)/)) loadFromQueryString(1);
  else loadFromCookie(0);
}

// function setArtefactOwnership(artefactObject, ownership) {
//   artefactObject['owned'] = ownership;
//   if (artefactObject['owned']) {
//     artefactObject['artefactDiv'].style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
//   } else {
//     artefactObject['artefactDiv'].style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
//   }
// }

function changeArtefactCurrentLevel(artefactName, increment) {
  var artefactObject = Artefacts[artefactName];
  setArtefactCurrentLevel(artefactName, artefactObject['currentLevel'] + increment);
}

function setArtefactCurrentLevel(artefactName, newCurrentLevel) {
  newCurrentLevel = Math.max(+newCurrentLevel, 0) || 0; // numberize
  var artefactObject = Artefacts[artefactName];
  if (newCurrentLevel < 0) {
    newCurrentLevel = 0;
  }
  if ((artefactObject['maxLevel'] != 0) &&
    (newCurrentLevel > artefactObject['maxLevel'])) {
    newCurrentLevel = artefactObject['maxLevel'];
  }
  if ((newCurrentLevel == 0) && (artefactObject['currentLevel'] > 0)) {
    ExistingArtefacts -= artefactObject['weight'];
    if (artefactObject['upgradedLevel'] == 0) {
      // setArtefactOwnership(artefactObject, 0);
      ArtefactsTotal -= artefactObject['weight'];
    }
  }
  if ((newCurrentLevel > 0) && (artefactObject['currentLevel'] == 0)) {
    ExistingArtefacts += artefactObject['weight'];
    if (artefactObject['upgradedLevel'] == 0) {
      // setArtefactOwnership(artefactObject, 1);
      ArtefactsTotal += artefactObject['weight'];
    }
  }
  artefactObject['currentLevel'] = newCurrentLevel;
  document.getElementById(artefactObject['name'] + ' Current Level').value = artefactObject['currentLevel'];
  if (artefactObject['currentLevel'] > artefactObject['upgradedLevel']) {
    setArtefactUpgradedLevel(artefactName, artefactObject['currentLevel']);
  }
  calculateArtefactUpgradedCostAndEffect(artefactName);
}

function changeArtefactUpgradedLevel(artefactName, increment) {
  var artefactObject = Artefacts[artefactName];
  setArtefactUpgradedLevel(artefactName, artefactObject['upgradedLevel'] + increment);
}

function setArtefactUpgradedLevel(artefactName, newUpgradedLevel) {
  newUpgradedLevel = Math.max(+newUpgradedLevel, 0) || 0; // numberize
  var artefactObject = Artefacts[artefactName];
  if (newUpgradedLevel < artefactObject['currentLevel']) {
    newUpgradedLevel = artefactObject['currentLevel'];
  }
  if ((artefactObject['maxLevel'] != 0) &&
    (newUpgradedLevel > artefactObject['maxLevel'])) {
    newUpgradedLevel = artefactObject['maxLevel'];
    //alert(artefactObject['name'] + '\'s max level is ' + artefactObject['maxLevel']);
  }
  if ((newUpgradedLevel == 0) && (artefactObject['owned'] == 1)) {
    // setArtefactOwnership(artefactObject, 0);
    ArtefactsTotal -= artefactObject['weight'];
  }
  if ((newUpgradedLevel > 0) && (artefactObject['owned'] == 0)) {
    // setArtefactOwnership(artefactObject, 1);
    ArtefactsTotal += artefactObject['weight'];
  }
  artefactObject['upgradedLevel'] = newUpgradedLevel;
  // $("[id='" + artefactObject['name'] + ' Upgraded Level' + "']").val(artefactObject['upgradedLevel']);
  document.getElementById(artefactObject['name'] + ' Upgraded Level').value = artefactObject['upgradedLevel'];
  calculateArtefactUpgradedCostAndEffect(artefactName);
}

function calculateArtefactCosts() {
  CrystalsSpentBuying = 0;
  for (var i = ExistingArtefacts; i < ArtefactsTotal; i++) {
    CrystalsSpentBuying += ArtefactCosts[i];
  }
  document.getElementById('CrystalsSpentBuying').value = CrystalsSpentBuying;
  calculateCrystalsRemaining();
}

function changeCrystalsToSpend() {
  CrystalsToSpend = document.getElementById('CrystalsToSpend').value;
  if (!CrystalsToSpend.match(/^\d+$/)) {
    CrystalsToSpend = 0;
    document.getElementById('CrystalsToSpend').value = '';
  }
  calculateCrystalsRemaining();
}

function calculateCrystalsRemaining() {
  CrystalsRemaining = CrystalsToSpend - (CrystalsSpentBuying + CrystalsSpentUpgrading);
  document.getElementById('CrystalsRemaining').value = CrystalsRemaining;
}

function calculateArtefactUpgradedCostAndEffect(artefactName) {
  var artefactObject = Artefacts[artefactName];
  var artefactCostObject = document.getElementById(artefactObject['name'] + ' Cost');
  var artefactEffectObject = document.getElementById(artefactObject['name'] + ' Effect');
  var currentArtefactCost = artefactCostObject.innerHTML;
  var newArtefactCost = 0;
  for (var i = artefactObject['currentLevel'] + 1; i <= artefactObject['upgradedLevel']; i++) {
    newArtefactCost += getArtefactLevelCost(artefactObject, i);
  }
  artefactCostObject.innerHTML = newArtefactCost;
  if (artefactObject['effectFactor'] == -999) {
    var artefactEffectTotal = 0.0;
    for (i = 1; i <= artefactObject['upgradedLevel']; i++) {
      artefactEffectTotal += getArtefactLevelEffect(artefactObject, i);
    }
    artefactEffectTotal = getCurrency(artefactEffectTotal);
    artefactEffectObject.innerHTML = (artefactObject['effectLabel'] + ': <strong>' + artefactObject['effectPreSymbol'] + artefactEffectTotal + artefactObject['effectPostSymbol'] + '</strong>');
  } else {
    artefactEffectObject.innerHTML = getArtefactLevelEffect(artefactObject, artefactObject['upgradedLevel']);
  }
  CrystalsSpentUpgrading = CrystalsSpentUpgrading + (newArtefactCost - currentArtefactCost);
  document.getElementById('CrystalsSpentUpgrading').value = CrystalsSpentUpgrading;
  calculateArtefactCosts();

  upgradePercentageUI(artefactName);
}

function getArtefactLevelCost(artefactObject, artefactLevel) {
  if (artefactLevel < 2) {
    return (0);
  }
  var artefactLevelCost = 0;
  var artefactParts = artefactObject['costFactor'].split('-');
  var artefactCostType = artefactParts[0];
  var artefactCostFactor = artefactParts[1];
  var artefactCostLevelModifier = artefactObject['costLevelModifier'];
  if (artefactCostType === 'Linear') {
    artefactLevelCost = (artefactLevel + artefactCostLevelModifier) * artefactCostFactor;
  } else if (artefactCostType === 'Exponential') {
    artefactLevelCost = Math.round(Math.pow(artefactLevel + artefactCostLevelModifier, artefactCostFactor));
  } else if (artefactCostType === 'Elevation') {
    artefactLevelCost = (artefactLevel + artefactCostLevelModifier) * artefactLevel;
  } else if (artefactCostType === 'Nocri') {
    if (artefactLevel < 75) {
      artefactLevelCost = Math.round(Math.pow(artefactLevel + artefactCostLevelModifier, artefactCostFactor));
    } else {
      artefactLevelCost = Math.round((1 + (((artefactLevel - 1) - 74) / 50)) * Math.pow(artefactLevel, 1.5));
    }
  } else if (artefactCostType == 'Myrech') {
    artefactLevelCost = parseInt(artefactCostFactor, 10);
  }
  return (artefactLevelCost);
}

function getArtefactLevelEffect(artefactObject, artefactLevel) {
  if (artefactLevel == 0) {
    return (artefactObject['effectLabel'] + ': ');
  }
  var artefactLevelEffect = 0;
  var artefactEffectBaseValue = artefactObject['effectBaseValue'];
  var artefactEffectFactor = artefactObject['effectFactor'];
  if (artefactEffectFactor == -999) {
    if (artefactLevel == 1) {
      artefactLevelEffect = artefactObject['effectBaseValue'];
    } else {
      artefactLevelEffect = artefactObject['effectBaseValue'] + Math.round(Math.pow(10, (artefactLevel / 3)));
    }
    return artefactLevelEffect;
  } else {
    artefactLevelEffect = artefactEffectBaseValue + (artefactLevel * artefactEffectFactor);
    // Avoid showing useless decimals for Elevation (e.g. 0.300000000001%)
    var artefactLevelEffectRnd = artefactLevelEffect;
    if (!isNaN(artefactLevelEffect)) {
      artefactLevelEffectRnd = (artefactLevelEffect * 10).toFixed(0) / 10;
    }
    return (artefactObject['effectLabel'] + ': <strong>' + artefactObject['effectPreSymbol'] + artefactLevelEffectRnd + artefactObject['effectPostSymbol'] + '</strong>');
  }

}

function getCurrency(number) {
  var suffix = ['k', 'M', 'G', 'T', 'P', 'E', 'Z', 'Y', 'Q', 'W', 'R', 'U', 'I', 'O', 'A', 'S', 'D', 'F', 'H', 'J', 'L', 'M', 'C', 'q', 'w', 'r', 'u', 'i', 'o', 'a', 's', 'd', 'f', 'h', 'j', 'l', 'x', 'c'];
  var power = 3;

  if (number < 1000) {
    return (commify(number));
  }

  do {
    if ((number >= Math.pow(10, power)) && (number < Math.pow(10, (power + 3))) && (power % 3 == 0)) {
      if (power <= 114) {
        var prefix = getCurrencyPrefix(number, power);
        if ((prefix >= 999.5) && (prefix <= 1000)) {
          return ('1' + suffix[power / 3]);
        } else {
          return (prefix + suffix[(power / 3) - 1]);
        }
      } else if (power >= 117) {
        var prefix = getCurrencyPrefix(number, power);
        if ((prefix >= 999.5) && (prefix <= 1000)) {
          return ('1!' + suffix[(power / 3) - 37]);
        } else {
          return (prefix + '!' + suffix[(power / 3) - 37]);
        }
      }
    } else {
      if (power % 3 == 0) {
        power = power + 3;
      } else {
        power++;
      }
    }
  } while (Math.pow(10, power) <= number);
}

function getCurrencyPrefix(number, power) {
  var prefix = number / Math.pow(10, power);
  if (prefix % 1 == 0) {
    prefix = prefix.toFixed(0);
  } else if (prefix < 10) {
    prefix = prefix.toFixed(2);
  } else if (prefix < 100) {
    prefix = prefix.toFixed(1);
  } else {
    prefix = prefix.toFixed(0);
  }
  return (prefix);
}

function commify(number) {
  return (number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
}

function resetAll() {
  document.getElementById('CrystalsToSpend').value = 0;
  changeCrystalsToSpend();
  for (var artefactName in Artefacts) {
    if (Artefacts[artefactName]['weight'] != 0) {
      setArtefactCurrentLevel(artefactName, 0);
    }
    setArtefactUpgradedLevel(artefactName, 0);
  }
}

function clearUpgrades() {
  for (var artefactName in Artefacts) {
    setArtefactUpgradedLevel(artefactName, 0);
  }
}

function transferUpgrades() {
  for (var artefactName in Artefacts) {
    if (artefactName != 'Rozh Gemstone') {
      var artefactObject = Artefacts[artefactName];
      setArtefactCurrentLevel(artefactName, artefactObject['upgradedLevel']);
    }
  }
}

function byOrder(a, b) {
  return (Artefacts[a]['order'] - Artefacts[b]['order']);
}

function getSortedArtefactNames() {
  var sortArray = [];
  for (var key in Artefacts) {
    sortArray.push(key);
  }
  sortArray.sort(byOrder);
  return (sortArray);
}

function getSaveString() {
  var saveString = 'c:' + CrystalsToSpend;
  var artefactNameArray = getSortedArtefactNames();
  for (var i = 0; i < artefactNameArray.length; i++) {
    saveString += ',a' + Artefacts[artefactNameArray[i]]['order'] + ':';
    saveString += Artefacts[artefactNameArray[i]]['currentLevel'] + '-';
    saveString += Artefacts[artefactNameArray[i]]['upgradedLevel'];
  }
  saveString += ';';
  return (saveString);
}

function getCookieExpireString() {
  var d = new Date();
  d.setTime(d.getTime() + (CookieExpireDays * 24 * 60 * 60 * 1000));
  return "expires=" + d.toUTCString() + ';';
}

function saveToCookie() {
  document.cookie = 'RunebladeSaveData=' + getSaveString() + ' ' + getCookieExpireString();
}

function saveToTextarea() {
  document.getElementById('SaveDataTextarea').value = getSaveString();
}

function linkToTextarea() {
  document.getElementById('DirectLinkTextarea').value = window.location.href + "?s=" + getSaveString();
}

function loadFromCookie(showAlert) {
  var loaded = 0;
  if ((document.cookie) && (document.cookie.length > 0)) {
    var saveStringMatches = document.cookie.match(/RunebladeSaveData=(((c|,a)[0-9]*:[0-9]+\-?[0-9]*)+)/);
    if (saveStringMatches != null) {
      if (saveStringMatches.length > 0) {
        loaded = 1;
        loadSaveString(saveStringMatches[1]);
      }
    }
  }
  if (showAlert && !loaded) {
    alert('no cookie save data found!');
  }
}

function loadFromTextarea(showAlert) {
  var loaded = 0;
  var textareaMatches = document.getElementById('SaveDataTextarea').value.match(/^\s*(((c|,a)[0-9]*:[0-9]+\-?[0-9]*)+);?\s*$/);
  if ((textareaMatches) && (textareaMatches.length > 0)) {
    loaded = 1;
    loadSaveString(textareaMatches[1]);
  }
  if (showAlert && !loaded) {
    alert('invalid save string in textarea!');
  }
}

function loadFromQueryString(showAlert) {
  var loaded = 0;
  var queryString = decodeURIComponent(window.location.search.substring(1));
  if ((queryString) && (queryString.match(/\bs=(((c|,a)[0-9]*:[0-9]+\-?[0-9]*)+)/))) {
    queryStringMatches = queryString.match(/\bs=(((c|,a)[0-9]*:[0-9]+\-?[0-9]*)+)/);
    if (queryStringMatches.length > 0) {
      loaded = 1;
      loadSaveString(queryStringMatches[1]);
    }
  }
  if (showAlert && loaded) {
    alert('data loaded from query string!');
  }
}

function loadSaveString(saveString) {
  var saveStringPartArray = saveString.split(',');
  var artefactNameArray = getSortedArtefactNames();
  for (var i = 0; i < saveStringPartArray.length; i++) {
    var partArray = saveStringPartArray[i].split(':');
    if (partArray[0] === 'c') {
      document.getElementById('CrystalsToSpend').value = partArray[1];
      changeCrystalsToSpend();
    } else if (partArray[0].match(/^a/)) {
      var saveArtefactIndex = partArray[0].replace(/^a/, '');
      var saveArtefactValues = partArray[1].split('-');
      if (Artefacts[artefactNameArray[saveArtefactIndex]]['weight'] != 0) {
        setArtefactCurrentLevel(artefactNameArray[saveArtefactIndex], parseInt(saveArtefactValues[0]));
      }
      setArtefactUpgradedLevel(artefactNameArray[saveArtefactIndex], parseInt(saveArtefactValues[1]));
    }
  }
}

function upgradePercentageUI(artefactName) {
  var artefactObject = Artefacts[artefactName];
  var currentLv = artefactObject['currentLevel'];
  var upgradedLv = artefactObject['upgradedLevel'];
  var glow = getEffectValue(artefactObject, upgradedLv) / getEffectValue(artefactObject, currentLv) - 1;

  var digitsUnderDot = 2;
  var p = Math.pow(10, digitsUnderDot);
  var text = Math.round(glow * 100 * p) / p;

  if (!text) text = 0;

  var id = artefactObject['name'] + ' Percentage';
  $(".percentage[id='" + id + "']").html(text);
}

function getEffectValue(artefactObject, artefactLevel) {
  if (artefactObject['effectFactor'] == -999) {
    var artefactEffectTotal = 0.0;
    for (i = 1; i <= artefactLevel; i++) artefactEffectTotal += getArtefactLevelEffect(artefactObject, i);
    return artefactEffectTotal;
  }

  var artefactEffectBaseValue = artefactObject['effectBaseValue'];
  var artefactEffectFactor = artefactObject['effectFactor'];
  return artefactEffectBaseValue + (artefactLevel * artefactEffectFactor);
}

$(function() {
  initializePage();

  $('.current-level').on("change paste", function() {
    setArtefactCurrentLevel($(this).attr('id').replace(' Current Level', ''), $(this).val());
  });

  $('.upgraded-level').on("change paste", function() {
    setArtefactUpgradedLevel($(this).attr('id').replace(' Upgraded Level', ''), $(this).val());
  });
});
