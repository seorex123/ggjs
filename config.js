document.getElementById("showNoticeBtn").onclick = function () {
    document.getElementById("popupBox").style.display = "block";
};
document.getElementById("closePopBox").onclick = function () {
    document.getElementById("popupBox").style.display = "none";
};
const textToCopy = 'https://www.facebook.com/';

// 为按钮添加点击事件监听器
document.getElementById('copyButton').addEventListener('click', () => {
    // 创建临时的textarea元素
    const tempInput = document.createElement('textarea');
    tempInput.value = textToCopy;
    document.body.appendChild(tempInput);

    // 选择并复制文本
    tempInput.select();
    document.execCommand('copy');

    // 移除临时的textarea元素
    document.body.removeChild(tempInput);

    // 提示用户复制成功
    alert('复制成功!');
});
