(function (alias) {
  if (typeof exports === 'object') {
    module.exports = alias;
  } else if (window.R) {
    alias(window.R);
  } else {
    // not a commonJS package and no ramda found... do something?
  }
})(function (ramda) {

  // deprecated method -> new method (alphabetical)
  var ALIAS_MAP = {
    foldl : 'reduce',
    foldr : 'reduceRight',
    foldlIndexed : 'reduceIndexed',
    foldrIndexed : 'reduceRightIndexed',
    lPartial  : 'partial',
    mapAccumL : 'mapAccum',
    mapAccumR : 'mapAccumRight',
    mixin     : 'merge',
    pCompose  : 'composeP',
    pPipe     : 'pipeP',
    rPartial  : 'partialRight',
    scanl     : 'scan',
    unfoldr   : 'unfold'
  };

  // we don't really need to check if the new method is defined,
  // as it will just eval to undefined anyways. Only reason would be
  // to notify user that the alias is still missing?
  for (var alias in ALIAS_MAP) {
    ramda[alias] = ramda[alias] || ramda[ALIAS_MAP[alias]];
  }
});
