export { };

const urlResource = 'https://catfact.ninja/docs/api-docs.json';

fetch(urlResource)
    .then(resp => resp.json())
    .then((json) => {
        console.log('logging response json:');
        console.log(json);
        // logInfo(json)
    });

function logInfo(json: unknown): void {
    console.log('logging info');
    console.log((json as { info: unknown })?.['info']);
}

async function get(url: string): Promise<unknown> {
    const response = await fetch(url);
    return await response.json();
}

async function getAndLog(): Promise<void> {
    const data = await get(urlResource);
    logInfo(data);
}

(async (): Promise<void> => {
    console.log('before start');

    await getAndLog();

    console.log('after start');
})();
