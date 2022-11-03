// Control the opacity of a layer by the dropdown menu selection. Add a Number [1,2,3,etc] to the beginning of layer to make it work

select = thisComp.layer("CONTROLS").effect("Dropdown")("Menu"); // pick whip to your dropdown
(select == parseInt(thisLayer.name[0])) ? value : 0;