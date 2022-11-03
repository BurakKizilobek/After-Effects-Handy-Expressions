// Inherits opacity from parent but retains the child's editabilty

(hasParent) ? (parent.opacity/100) * value : value;