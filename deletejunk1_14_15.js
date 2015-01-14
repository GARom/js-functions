function letterGrade(score, total) {
  if ( score / total >= 0.9 && score / total <= 1.0 ) {
      return "A";
  }else if ( score / total >= 0.8 && score / total > 0.9 ) {
      return "B";
  }else if ( score / total >= 0.7 && score / total > 0.8 ) {
      return "C";
  }else if ( score / total >= 0.6 && score / total > 0.7 ) {
      return "D";
  }else ( score / total >= 0.5 && score / total > 0.6 ) {
      return "F";
  }

 }