class Plugin {
  #ctx;

  constructor(ctx) {
    this.#ctx = ctx;
  }

  onLoad() {
    const settingButton = document.querySelector('#setting');
	if(!settingButton) return;
    settingButton.style.display = 'flex';
    logger.info("Successfully show Setting Button!");
  }
}

module.exports = Plugin;
