(global as any).requestAnimationFrame = function(callback) {
  setTimeout(callback, 0);
};
