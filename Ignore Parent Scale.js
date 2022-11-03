// Maintain scale of a layer when parented to another layer. Apply to scale property of child layer.

s = [];
parentScale = parent.transform.scale.value;
for (i = 0; i < parentScale.length; i++){
s[i] = (parentScale[i]== 0) ? 0 : value[i]*100/parentScale[i];
}
s