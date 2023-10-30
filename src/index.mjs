import "./styles.css";

const onClickAdd = () => {
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";
  
  createIncompleteList(inputText);
}

const createIncompleteList = (text) => {
  
  //div生成
  const div = document.createElement("div");
  div.className = "list-row";

  // liタグ生成
  const li = document.createElement("li");
  li.innerText = text;

    // button(完了)タグ生成
    const completeButton = document.createElement("button");
    completeButton.innerText = "完了";
    completeButton.addEventListener("click", () => {
  
      const addTarget = completeButton.parentNode;
  
      const text = addTarget.firstChild.innerText;
  
      deleteFromImcompleteList(completeButton.parentNode);
  
      addTarget.textContent = null;
      
      // liタグ生成
      const li = document.createElement("li");
      li.innerText = text;
  
      const backButton = document.createElement("button");
      backButton.innerText = "戻す";
      backButton.addEventListener("click", () => {
        // 押された削除ボタンの親タグ(div)を未完了リストから削除
        const deleteTarget = backButton.parentNode;
        document.getElementById("complete-list").removeChild(deleteTarget);
        const text = backButton.parentNode.firstChild.innerText;
        createIncompleteList(text);
      });

      addTarget.appendChild(li);
      addTarget.appendChild(backButton);
      
      document.getElementById("complete-list").appendChild(addTarget);
  
    });
  
  
  // button(削除)タグ生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    // 押された削除ボタンの親タグ(div)を未完了リストから削除
    deleteFromImcompleteList(deleteButton.parentNode);
  });

  // divタグの子要素に各要素を設定
  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  document.getElementById("incomplete-list").appendChild(div);
    
}

const deleteFromImcompleteList = (target) =>{
  // 押されたボタンの親タグ(div)を未完了リストから削除
  document.getElementById("incomplete-list").removeChild(target);
}

document
  .getElementById("add-button")
  .addEventListener("click",() => onClickAdd());
