class Car {
  static list = [];

  static init(cars) {
    this.list = cars.map((i) => new this(i));
  }

  constructor({
    id,
    plate,
    manufacture,
    model,
    image,
    rentPerDay,
    capacity,
    description,
    transmission,
    available,
    type,
    year,
    options,
    specs,
    availableAt,
  }) {
    this.id = id;
    this.plate = plate;
    this.manufacture = manufacture;
    this.model = model;
    this.image = image;
    this.rentPerDay = rentPerDay;
    this.capacity = capacity;
    this.description = description;
    this.transmission = transmission;
    this.available = available;
    this.type = type;
    this.year = year;
    this.options = options;
    this.specs = specs;
    this.availableAt = availableAt;
  }

  render() {
    const rentPerDayFormatted = new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      maximumFractionDigits: 0,
    }).format(this.rentPerDay);

    return `
    <div class="card d-flex flex-column h-100">
      <img class="card-img-top img-fluid" id="car-img" src="${this.image}" alt="${this.manufacture}" />
      <div class="card-body">
          <h2 class="card-title fw-bold" id="car-name">${this.manufacture} ${this.model}/${this.type}</h2>
          <h4 class="card-sub-title fw-bold" id="car-rent">${rentPerDayFormatted} / hari</h4>
          <p class="card-text">${this.description}</p>
          <ul class="list-group car-list">
              <li class="list-group-item"><i><img src="./images/users.png" alt="user-icon" /></i> ${this.capacity} Orang</li>
              <li class="list-group-item"><i><img src="./images/fi_settings.svg" alt="user-icon" /></i> ${this.transmission}</li>
              <li class="list-group-item"><i><img src="./images/calendar.png" alt="user-icon" /></i> Tahun ${this.year}</li>
          </ul>
      </div>
      <a href="cars?id=${this.id}" class="mt-auto d-block w-100 py-2 nav-link bg-success success-color rounded text-white fw-bold text-center">Pilih Mobil</a>
    </div>`;
  }
}
