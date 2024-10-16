const cache = new Map()
const prefix = 'http://tinyurl.com/'

function encode(longUrl: string): string {
    const key = Math.random().toFixed(8);
    cache.set(key, longUrl)
    return prefix + key;
};

function decode(shortUrl: string): string {
    const key = shortUrl.replace(prefix, '')
    return cache.get(key)
};