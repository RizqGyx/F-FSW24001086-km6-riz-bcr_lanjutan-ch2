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
    const cars = await Binar.listCars((data) => {
      const tanggalJemputData = new Date(data.availableAt).getTime();
      const tanggal = new Date(
        `${this.tanggal.value} ${this.waktuJemput.value}`
      ).getTime();
      const checkWaktu = tanggalJemputData >= tanggal;
      const availableAt =
        this.tipeDriver.value === "true" && data.available ? true : false;
      const notAvailableAt =
        this.tipeDriver.value === "false" && !data.available ? true : false;
      const penumpang = data.capacity >= this.jumlahPenumpang.value;
      if (
        this.tipeDriver.value !== "default" &&
        this.tanggal.value !== "" &&
        this.waktuJemput.value !== "false" &&
        this.jumlahPenumpang.value >= 0
      ) {
        return (availableAt || notAvailableAt) && checkWaktu && penumpang;
      } else if (
        this.tipeDriver.value !== "default" &&
        this.jumlahPenumpang.value > 0
      ) {
        return (availableAt || notAvailableAt) && penumpang;
      } else if (
        this.tanggal.value !== "" &&
        this.waktuJemput.value !== "false" &&
        this.jumlahPenumpang.value > 0
      ) {
        return checkWaktu && penumpang;
      } else if (
        this.tanggal.value !== "" &&
        this.waktuJemput.value !== "false"
      ) {
        return checkWaktu;
      } else if (this.tipeDriver.value !== "default") {
        return availableAt || notAvailableAt;
      } else {
        return penumpang;
      }
    });
    console.log("makan" + { cars });
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
