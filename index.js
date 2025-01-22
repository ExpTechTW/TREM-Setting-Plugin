module.exports = function (ctx) {
  ctx.on('load', () => {
    const setting = document.getElementById('setting');
    if(setting) {
      setting.style.display = 'flex';
      logger.info('Successfully show Setting Button!');
    }
  });
};
