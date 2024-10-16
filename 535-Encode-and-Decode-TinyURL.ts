const cache = new Map()
const prefix = 'http://tinyurl.com/'

function encode(longUrl: string): string {
    let key = '0';
    while (cache.has(key)) { //when 50 million entries, a collision is very likely
        key = Math.random().toFixed(8); //100,000,000 entries
    }
    cache.set(key, longUrl)
    return prefix + key;
};

function decode(shortUrl: string): string {
    const key = shortUrl.replace(prefix, '')
    return cache.get(key)
};
