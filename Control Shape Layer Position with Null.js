// Control shape layer position with a Null - works like parenting, but keeps the relative position of your shape layer.
control=thisComp.layer("Control NULL"); // your controller null
controlPos = control.toComp(control.transform.anchorPoint);
fromComp(controlPos)
// apply to position property