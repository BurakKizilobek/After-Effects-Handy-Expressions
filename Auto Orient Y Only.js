// https://www.goodboy.ninja/expressionscheatsheet#looppathkeys



delta = toWorld(anchorPoint) - thisComp.activeCamera.toWorld([0,0,0]);
radiansToDegrees(Math.atan2(delta[0],delta[2]))