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
      <img id="car-img" class="card-img-top img-fluid" src="${
        this.image
      }" alt="${this.manufacture}" />
      <div class="card-body">
          <h3 id="car-name" class="card-title">${this.manufacture} ${
      this.model
    } / ${this.type}</h3>
          <h2 id="car-rent" class="card-sub-title fw-bold fs-6">${rentPerDayFormatted} / hari</h2>
          <p class="card-text fw-light">${
            this.description ||
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean luctus, mauris ac suscipit rutrum, tellus dolor fermentum diam, nec tristique mi nunc mattis leo."
          }</p>
          <ul class="list-group car-list">
              <li class="list-group-item border-0"><i><img src="./images/users.png" alt="user-icon" /></i><span class="mx-3">${
                this.capacity
              } Orang</span></li>
              <li class="list-group-item border-0"><i><img src="./images/settings.png" alt="setting-icon" /></i><span class="mx-3">${
                this.transmission
              }</span></li>
              <li class="list-group-item border-0"><i><img src="./images/calendar.png" alt="calender-icon" /></i><span class="mx-3">Tahun ${
                this.year
              }</span></li>
          </ul>
      </div>
      <a href="cars?id=${
        this.id
      }" class="mt-auto d-block w-100 py-2 nav-link bg-success success-color rounded text-white fw-bold text-center" target="_blank">Pilih Mobil</a>
    </div>`;
  }
}
