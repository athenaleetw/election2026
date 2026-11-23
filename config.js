/* 總機網址。留空＝示範模式（假資料，不會送出任何東西）。
   2026-11-23 起改用 Supabase（備案正式上線）：Google Apps Script 當晚約一半請求被吞，改由 Supabase 接手。
   要切回 Google：把下面兩行對調（Supabase 那行前面加 //，Google 那行前面的 // 拿掉），Commit 即可。 */
window.ELECTION_API = 'https://nlytlpdzajaucsojgfan.supabase.co/functions/v1/election';
// window.ELECTION_API = 'https://script.google.com/macros/s/AKfycbxaajQ7zpdUqXC_nNOZUYdXNn0bzCJBjjrd4X7N1qS_CW9WAKkn8D80xyyL-IkmVZk1pw/exec';
