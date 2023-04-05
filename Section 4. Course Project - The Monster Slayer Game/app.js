function getRandomValue(min, max) {
  return Math.floor(Math.random() * (max - min)) + max;
}

const app = Vue.createApp({
  data() {
    return {
      monsterHealth: 100,
      playerHealth: 100,
      currentRound: 0,
      winner: null,
      logMessagess: [],
    };
  },
  computed: {
    monsterbarStyles() {
      if (this.monsterHealth < 0) {
        return { width: "0%" };
      }
      return { width: this.monsterHealth + "%" };
    },
    playerbarStyles() {
      if (this.playerHealth < 0) {
        return { width: "0%" };
      }
      return { width: this.playerHealth + "%" };
    },
    mayUseSpecialAttack() {
      return this.currentRound % 3 !== 0;
    },
  },
  watch: {
    playerHealth(value) {
      if (value <= 0 && this.monsterHealth <= 0) {
        //drew
        this.winner = "Draw";
      } else if (value <= 0) {
        //player lost
        this.winner = "monster";
      }
    },
    monsterHealth(value) {
      if (value <= 0 && this.playerHealth <= 0) {
        //drew
        this.winner = "Draw";
      } else if (value <= 0) {
        //monster lost
        this.winner = "Player";
      }
    },
  },
  methods: {
    StartGame() {
      this.monsterHealth = 100;
      this.playerHealth = 100;
      this.currentRound = 0;
      this.winner = null;
      this.logMessagess = [];
    },
    attackMonster() {
      this.currentRound++;
      var attackValue = getRandomValue(5, 12);
      this.monsterHealth -= attackValue;
      this.addLogMessage('player','attack',attackValue)
      this.attackPlayer();
    },
    attackPlayer() {
      var attackValue = getRandomValue(8, 15);
      this.addLogMessage('monster','attack',attackValue)
      this.playerHealth -= attackValue;
    },
    specialAttackMonster() {
      this.currentRound++;
      var attackValue = getRandomValue(10, 25);
      this.addLogMessage('player','attack',attackValue)
      this.monsterHealth -= attackValue;
      this.attackPlayer();
    },
    healPlayer() {
      this.currentRound++;
      const healValue = getRandomValue(8, 20);
      if (this.playerHealth + healValue > 100) {
        this.playerHealth = 100;
      } else {
        this.playerHealth += healValue;
      }
      this.addLogMessage('player','heal',healValue)
      this.attackPlayer();
    },
    surrender() {
      this.winner = "monster";
    },
    addLogMessage(who, whatHppened, value) {
        this.logMessagess.unshift({
            actionBy: who,
            actionType: whatHppened,
            actionValue: value
        })
    },
  },
});

app.mount("#game");
