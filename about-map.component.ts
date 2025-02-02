
import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';

class RegionData {
  id: string;
  name: string;
  description: string;
}

@Component({
  selector: 'app-about-map',
  templateUrl: './about-map.component.html',
  styleUrls: ['./about-map.component.scss']
})
export class AboutMapComponent {
  regionsData: RegionData[] = [
    {
      id: "TR-01",
      name: "Adana",
      description: "2,08%"
    },
    {
      id: "TR-02",
      name: "Adıyaman",
      description: "0,01%"
    },
    {
      id: "TR-03",
      name: "Afyonkarahisar",
      description: "0,16%"
    },
    {
      id: "TR-04",
      name: "Ağrı",
      description: "0,01%"
    },
    {
      id: "TR-05",
      name: "Amasya",
      description: "0,01%"
    },
    {
      id: "TR-06",
      name: "Ankara",
      description: "12,82%"
    }, {
      id: "TR-07",
      name: "Antalya",
      description: "4,97%"
    }, {
      id: "TR-08",
      name: "Artvin",
      description: "0,01%"
    }, {
      id: "TR-09",
      name: "Aydın",
      description: "0,77%"
    }, {
      id: "TR-10",
      name: "Balıkesir",
      description: "0,65%"
    }, {
      id: "TR-11",
      name: "Bilecik",
      description: "0,02%"
    }, {
      id: "TR-12",
      name: "Bingöl",
      description: "0,01%"
    }, {
      id: "TR-13",
      name: "Bitlis",
      description: "0,13%"
    }, {
      id: "TR-14",
      name: "Bolu",
      description: "0,18%"
    }, {
      id: "TR-15",
      name: "Burdur",
      description: "0,04%"
    }, {
      id: "TR-16",
      name: "Bursa",
      description: "4,97%"
    }, {
      id: "TR-17",
      name: "Çanakkale",
      description: "0,45%"
    }, {
      id: "TR-18",
      name: "Çankırı",
      description: "0,02%"
    }, {
      id: "TR-19",
      name: "Çorum",
      description: "0,04%"
    }, {
      id: "TR-20",
      name: "Denizli",
      description: "1,03%"
    }, {
      id: "TR-21",
      name: "Diyarbakır",
      description: "0,17%"
    }, {
      id: "TR-22",
      name: "Edirne",
      description: "0,65%"
    }, {
      id: "TR-23",
      name: "Elazığ",
      description: "0,02%"
    }, {
      id: "TR-24",
      name: "Erzincan",
      description: "0,07%"
    }, {
      id: "TR-25",
      name: "Erzurum",
      description: "0,05%"
    }, {
      id: "TR-26",
      name: "Eskişehir",
      description: "1,23%"
    }, {
      id: "TR-27",
      name: "Gaziantep",
      description: "0,86%"
    }, {
      id: "TR-28",
      name: "Giresun",
      description: "0,02%"
    }, {
      id: "TR-29",
      name: "Gümüşhane",
      description: "0,02%"
    }, {
      id: "TR-30",
      name: "Hakkari",
      description: "0,01%"
    }, {
      id: "TR-31",
      name: "Hatay",
      description: "0,27%"
    }, {
      id: "TR-32",
      name: "Isparta",
      description: "0,57%"
    }, {
      id: "TR-33",
      name: "Mersin",
      description: "1,56%"
    }, {
      id: "TR-34",
      name: "Istanbul",
      description: "46,84%"
    }, {
      id: "TR-35",
      name: "Izmir",
      description: "9,97%"
    }, {
      id: "TR-36",
      name: "Kars",
      description: "0,02%"
    }, {
      id: "TR-37",
      name: "Kastamonu",
      description: "0,02%"
    }, {
      id: "TR-38",
      name: "Kayseri",
      description: "1,06%"
    }, {
      id: "TR-39",
      name: "Kırklareli",
      description: "0,15%"
    }, {
      id: "TR-40",
      name: "Kırşehir",
      description: "0,02%"
    }, {
      id: "TR-41",
      name: "Kocaeli",
      description: "2,58%"
    }, {
      id: "TR-42",
      name: "Konya",
      description: "1,44%"
    }, {
      id: "TR-43",
      name: "Kütahya",
      description: "0,15%"
    }, {
      id: "TR-44",
      name: "Malatya",
      description: "0,11%"
    }, {
      id: "TR-45",
      name: "Manisa",
      description: "0,42%"
    }, {
      id: "TR-46",
      name: "K. Maraş",
      description: "0,13%"
    }, {
      id: "TR-47",
      name: "Mardin",
      description: "0,01%"
    }, {
      id: "TR-48",
      name: "Muğla",
      description: "0,89%"
    }, {
      id: "TR-49",
      name: "Muş",
      description: "0,01%"
    }, {
      id: "TR-50",
      name: "Nevşehir",
      description: "0,01%"
    }, {
      id: "TR-51",
      name: "Niğde",
      description: "0,01%"
    }, {
      id: "TR-52",
      name: "Ordu",
      description: "0,09%"
    }, {
      id: "TR-53",
      name: "Rize",
      description: "0,04%"
    }, {
      id: "TR-54",
      name: "Sakarya",
      description: "1,12%"
    }, {
      id: "TR-55",
      name: "Samsun",
      description: "0,74%"
    }, {
      id: "TR-56",
      name: "Siirt",
      description: "0,01%"
    }, {
      id: "TR-57",
      name: "Sinop",
      description: "0,01%"
    }, {
      id: "TR-58",
      name: "Sivas",
      description: "0,07%"
    }, {
      id: "TR-59",
      name: "Tekirdağ",
      description: "0,93%"
    }, {
      id: "TR-60",
      name: "Tokat",
      description: "0,05%"
    }, {
      id: "TR-61",
      name: "Trabzon",
      description: "0,19%"
    }, {
      id: "TR-62",
      name: "Tunceli",
      description: "0,01%"
    }, {
      id: "TR-63",
      name: "Şanlıurfa",
      description: "0,15%"
    }, {
      id: "TR-64",
      name: "Uşak",
      description: "0,06%"
    }, {
      id: "TR-65",
      name: "Van",
      description: "0,01%"
    }, {
      id: "TR-66",
      name: "Yozgat",
      description: "0,02%"
    }, {
      id: "TR-67",
      name: "Zonguldak",
      description: "0,17%"
    }, {
      id: "TR-68",
      name: "Aksaray",
      description: "0,10%"
    }, {
      id: "TR-69",
      name: "Bayburt",
      description: "0,01%"
    }, {
      id: "TR-70",
      name: "Karaman",
      description: "0,04%"
    }, {
      id: "TR-71",
      name: "Kırıkkale",
      description: "0,06%"
    }, {
      id: "TR-72",
      name: "Batman",
      description: "0,02%"
    }, {
      id: "TR-73",
      name: "Şırnak",
      description: "0,01%"
    }, {
      id: "TR-74",
      name: "Bartın",
      description: "0,02%"
    }, {
      id: "TR-75",
      name: "Ardahan",
      description: "0,01%"
    }, {
      id: "TR-76",
      name: "Iğdır",
      description: "0,01%"
    }, {
      id: "TR-77",
      name: "Yalova",
      description: "0,32%"
    }, {
      id: "TR-78",
      name: "Karabük",
      description: "0,11%"
    }, {
      id: "TR-79",
      name: "Kilis",
      description: "0,01%"
    }, {
      id: "TR-80",
      name: "Osmaniye",
      description: "0,03%"
    }, {
      id: "TR-81",
      name: "Düzce",
      description: "0,17%"
    }
  ]

  @ViewChild('mapWrapper', { static: true }) mapWrapper: ElementRef;
  showInfoToggle = false;
  showRegionInfo = false;
  regionInfo: RegionData | undefined; // Seçilen bölge bilgisi
  infoToggleStyle = {
    top: '0px',
    left: '0px'
  };

  dynamicWith: number | null = null;
  constructor(

  ) {

  }

  ngOnInit() {
  }
  ngAfterViewInit() {
    this.dynamicWith = window.screen.width;
  }

  mapEvent(event: MouseEvent) {
    const target = event.target as HTMLElement;
    const parent = target.closest('[id]'); // ID'si olan en yakın elementi bulur.
    if (parent) {
      if(parent.id === 'mapTab'){
        this.showInfoToggle = false;
      }
      this.regionInfo = this.regionsData.find(region => region.id === parent.id);
      if (this.regionInfo) {
        this.showInfoToggle = true;
        this.showRegionInfo = false;
      }
    }
  }

  @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    if (this.showInfoToggle) {
      const mapRect = this.mapWrapper.nativeElement.getBoundingClientRect(); // Harita alanının boyutları
      const mouseX = event.clientX;
      const mouseY = event.clientY;

      // Tooltip'in harita üzerine yerleşimi
      let tooltipTop = mouseY - mapRect.top - 10;  // Fareyi harita üzerindeki doğru pozisyona yerleştir
      let tooltipLeft = mouseX - mapRect.left + 10; // Fareyi harita üzerindeki doğru pozisyona yerleştir

      // Tooltip'in ekranın kenarlarına çarpmasını engelleme
      const mapWidth = mapRect.width;
      const mapHeight = mapRect.height;

      // Tooltip sağdan taşarsa
      if (tooltipLeft + 122 > mapWidth) {
        tooltipLeft = mapWidth - 122; // 122px tooltip genişliği
      }

      // Tooltip soldan taşarsa
      if (tooltipLeft < 0) {
        tooltipLeft = 0;
      }

      // Tooltip alt kısmı ekranda kalacak şekilde yerleştirme
      if (tooltipTop + 60 > mapHeight) {
        tooltipTop = mapHeight - 60;
      }

      this.infoToggleStyle.top = `${tooltipTop}px`;
      this.infoToggleStyle.left = `${tooltipLeft}px`;
    }
  }
}
