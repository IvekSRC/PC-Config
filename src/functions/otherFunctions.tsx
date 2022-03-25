import { Rule } from "../interfaces/Rule";

export const expandOrCollapseBtn = (title: string) => {  
  // Zamenjena je dispatch-om, nigde se ne zove
  var content = document.getElementById(title);
  
  
  if(content?.className == "open") {
    content.className = "close";
    content.style.display = "none";
  } else if (content?.className == "close") {
    content.className = "open";
    content.style.display = "";
  }  
}

export const isSelected = (title: string, selectedItems: [string, boolean][]) => {
  selectedItems = selectedItems.filter(function(value) {
    return value[1] === true
  }); 
  const flatedSelectedItems = selectedItems.flat().toString();
  if(flatedSelectedItems.includes(title)) {
    if(flatedSelectedItems[(flatedSelectedItems.indexOf(title) + title.length)] != " ") {
      return true;
    }
  }
  else {
    return false;
  }
}

export const isCompatible = (arg1: any, arg2: any, rule: Rule) => {
  if(
      eval(
        arg1 + rule.operators.questioningOne + rule.arg1 + rule.operators.combinationOperator +
        arg2 + rule.operators.questioningTwo + rule.arg2
      )
    )
  {
    return true;
  }
  else 
  {
    return false;
  }
}