class App {
  constructor() {
    this.clearButton = document.getElementById("clear-btn");
    this.loadButton = document.getElementById("load-btn");
    this.carContainerElement = document.getElementById("cars-container");
    this.tipeDriver = document.getElementById("tipeDriver");
    this.tanggalSewa = document.getElementById("tanggalSewa");
    this.waktuSewa = document.getElementById("waktuSewa");
    this.jumlahPenumpang = document.getElementById("jumlahPenumpang");

    // Button
    this.loadButton = document.getElementById("load-btn");
  }

  async init() {
    await this.load();
    this.run();
  }

  run = () => {
    // Membersihkan konten cars-container
    this.clear();

    if (Car.list.length === 0 || Car.list === undefined) {
        let car_container = document.getElementById('cars-container');
        car_container.innerHTML = `<h1 class="text-danger text-center fw-bold mb-5 pb-5"> Kriteria Mobil Tidak Tersedia! </h1>`;
        console.log(car_container);
        return;
    }

    Car.list.forEach((car) => {
        const node = document.createElement("div");
        node.classList.add("col-md-4", "mb-4");
        node.innerHTML = car.render();
        this.carContainerElement.appendChild(node);
    });
  };


  async load() {
    const cars = await Binar.listCars();
    Car.init(cars);
  }

  async loadfilter() {
    const { tipeDriver, tanggalSewa, waktuSewa, jumlahPenumpang } = this;

    if (tipeDriver.value === "default" && tanggalSewa.value === "" && waktuSewa.value === "false" && jumlahPenumpang.value <= 0) {
        await this.load();
        return;
    }

    const cars = await Binar.listCars(data => {
        const tanggalJemputData = new Date(data.availableAt).getTime();
        const tanggal = new Date(`${tanggalSewa.value} ${waktuSewa.value}`).getTime();
        const availableAt = (tipeDriver.value === "true" && data.available) || (tipeDriver.value === "false" && !data.available);
        const checkWaktu = tanggalJemputData >= tanggal;
        const penumpang = data.capacity >= jumlahPenumpang.value;

        return (
            (tipeDriver.value === "default" || availableAt) &&
            (tanggalSewa.value === "" || waktuSewa.value === "false" || checkWaktu) &&
            (jumlahPenumpang.value <= 0 || penumpang)
        );
    });

    Car.init(cars);
  }


  clear = () => {
    let child = this.carContainerElement.firstElementChild;

    while (child) {
      child.remove();
      child = this.carContainerElement.firstElementChild;
    }
  };
}
