function myReplace(str, before, after) {

  if (/^[A-Z]/.test(before)) {
    return str.replace(before, after[0].toUpperCase() + after.slice(1));
    
  }

  if (/^[a-z]/.test(before)) {
    return str.replace(before, after[0].toLowerCase() + after.slice(1));
  }

  return str.replace(before, after);
}


console.log(myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"));

// print A quick brown fox leaped over the lazy dog
