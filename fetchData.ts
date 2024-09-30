interface Pet {
    id: number;
    name: string;
    status: string;
    [key: string]: any;
}

async function fetchPetsByStatus(status: string): Promise<Pet[]> {
    const url = `https://petstore3.swagger.io/api/v3/pet/findByStatus?status=${status}`;

    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`Ошибка HTTP: ${response.status}`);
        }

        const data: Pet[] = await response.json();

        return data;
    } catch (error) {
        console.error('Ошибка при выполнении запроса:', error);
        return [];
    }
}

fetchPetsByStatus('available').then(pets => {
    console.log('Полученные данные:', pets);
});
