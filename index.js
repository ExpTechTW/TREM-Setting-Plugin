module.exports = function (ctx) {
  ctx.on('load', () => {
    document.getElementById('setting').style.display = 'flex';
    logger.info('Successfully show Setting Button!');
  });
};
