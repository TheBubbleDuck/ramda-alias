//Simple decorator function to add alias
module.exports = function (R) {
  R.mixin = R.merge;
  R.foldl = R.reduce;
  R.mixin = R.merge;
  R.foldl = R.reduce;
  R.foldr = R.reduceRight;
  R.foldlIndexed = R.reduceIndexed;
  R.foldrIndexed = R.reduceRightIndexed;
  R.lPartial = R.partial;
  R.rPartial = R.partialRight;
  R.mapAccumL = R.mapAccum;
  R.mapAccumR = R.mapAccumRight;
  R.scanl = R.scan;
  R.unfoldr = R.unfold;
  R.pCompose = R.composeP;
  R.pPipe = R.pipeP;

  return R;
}
