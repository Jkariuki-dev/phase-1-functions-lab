
function distanceFromHqInBlocks(block){
    if (block > 42) {
        return block - 42;
      } else {
        return 42 - block;
      }

}
function distanceFromHqInFeet (block){
        return distanceFromHqInBlocks (block) * 264
    }
    
