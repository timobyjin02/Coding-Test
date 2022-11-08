function solution(n, k) {
    const lamb = n * 12000;
    const service = Math.floor(n / 10);
    const drink = k >= service ? (k - service) * 2000 : k * 2000;

    return lamb + drink;
}
