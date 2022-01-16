const profile = {
    name: 'Mg Mg',
    age: 17,
    loc: {
        lat: 29.33,
        lng: 92.3,
    },
};

const { name }: { name: string } = profile;
const {
    loc: { lat, lng },
}: { loc: { lat: number; lng: number } } = profile;
