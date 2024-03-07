class App {
  constructor() {
    this.clearButton = document.getElementById("clear-btn");
    this.loadButton = document.getElementById("load-btn");
    this.carContainerElement = document.getElementById("cars-container");
    this.tipeDriver = document.getElementById("tipeDriver");
    this.tanggal = document.getElementById("tanggal");
    this.waktuJemput = document.getElementById("waktuJemput");
    this.jumlahPenumpang = document.getElementById("jumlahPenumpang");
  }

  async init() {
    await this.load();
    this.run();

    // Register click listener
    // this.clearButton.onclick = this.clear;
    // this.loadButton.onclick = this.run;
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
    console.log(cars);
  }

  clear = () => {
    // let child = this.carContainerElement.firstElementChild;

    // while (child) {
    //   child.remove();
    //   child = this.carContainerElement.firstElementChild;
    // }

    // Membersihkan konten cars-container
    this.carContainerElement.innerHTML = "";
  };
}
