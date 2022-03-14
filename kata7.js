const checkAir = function (samples, threshold) {
  let clean = 0 , dirty = 0;
  for (let i = 0; i < samples.length; i++){
    switch (samples[i]){
      case "clean":
        clean ++;
        break;
      case "dirty":
        dirty ++;
        break;
    }
  }
  if (clean/(clean + dirty) >= threshold){
    return "Clean";
  }
  else{
    return "Polluted";
  }
};

console.log(checkAir(
  ['clean', 'clean', 'dirty', 'clean', 'dirty', 'clean', 'clean', 'dirty', 'clean', 'dirty'],
  0.3
));

console.log(checkAir(
  ['dirty', 'dirty', 'dirty', 'dirty', 'clean'],
  0.25
));

console.log(checkAir(
  ['clean', 'dirty', 'clean', 'dirty', 'clean', 'dirty', 'clean'],
  0.9
))