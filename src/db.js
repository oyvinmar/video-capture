import { openDB as open } from 'idb';

function fileToArrayBuffer(file) {
  return new Promise(function(resolve, reject) {
    const reader = new FileReader();

    reader.onerror = function onerror(ev) {
      reject(ev.target.error);
    };

    reader.onload = function onload(ev) {
      resolve(ev.target.result);
    };

    reader.readAsArrayBuffer(file);
  });
}

export async function openDB() {
  return open('VideoDb', 1, {
    upgrade(db, oldVersion, newVersion, transaction) {
      if (!db.objectStoreNames.contains('videos')) {
        db.createObjectStore('videos', { autoIncrement: true });
      }
    },
  });
}

export async function getAllVideos() {
  const db = await openDB();
  return db.getAll('videos');
}

export async function storeVideo(file) {
  let data = await fileToArrayBuffer(file);

  const db = await openDB();
  let tx = db.transaction('videos', 'readwrite');
  let item = {
    data,
    file,
    created: new Date().getTime(),
  };
  tx.store.add(item);
  return tx.done;
}
