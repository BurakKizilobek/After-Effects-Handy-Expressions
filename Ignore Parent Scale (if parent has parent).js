// Maintain scale of a layer when parented to another layer - even if that layer has a parent. Apply to scale property of child layer.

L = thisLayer;
s = transform.scale.value;
while (L.hasParent){
 L = L.parent;
 for (i = 0; i < s.length; i++) s[i] *= 100/L.transform.scale.value[i]
}
s