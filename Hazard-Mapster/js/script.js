// ==========================================
// Hazard Mapster - JavaScript
// ==========================================

let barangaysData = [];

// Barangay coordinates mapping for Zamboanga City
const barangayCoordinates = {
  "barangay1": {"latitude": 6.9271, "longitude": 122.0789},
  "barangay2": {"latitude": 6.9245, "longitude": 122.0856},
  "barangay3": {"latitude": 6.9168, "longitude": 122.0712},
  "barangay4": {"latitude": 6.9320, "longitude": 122.0745},
  "barangay5": {"latitude": 6.9380, "longitude": 122.0821},
  "barangay6": {"latitude": 6.9142, "longitude": 122.0658},
  "barangay7": {"latitude": 6.9452, "longitude": 122.0925},
  "barangay8": {"latitude": 6.9289, "longitude": 122.0912},
  "barangay9": {"latitude": 6.9198, "longitude": 122.0828},
  "barangay10": {"latitude": 6.9365, "longitude": 122.0756},
  "barangay11": {"latitude": 6.9125, "longitude": 122.0645},
  "barangay12": {"latitude": 6.9412, "longitude": 122.0889},
  "barangay13": {"latitude": 6.9215, "longitude": 122.0692},
  "barangay14": {"latitude": 6.9268, "longitude": 122.0834},
  "barangay15": {"latitude": 6.9485, "longitude": 122.0945},
  "barangay16": {"latitude": 6.9352, "longitude": 122.0778},
  "barangay17": {"latitude": 6.9498, "longitude": 122.0965},
  "barangay18": {"latitude": 6.9142, "longitude": 122.0665},
  "barangay19": {"latitude": 6.9305, "longitude": 122.0821},
  "barangay20": {"latitude": 6.9535, "longitude": 122.0998},
  "barangay21": {"latitude": 6.9245, "longitude": 122.0712},
  "barangay22": {"latitude": 6.9168, "longitude": 122.0825},
  "barangay23": {"latitude": 6.9412, "longitude": 122.0745},
  "barangay24": {"latitude": 6.9325, "longitude": 122.0865},
  "barangay25": {"latitude": 6.9285, "longitude": 122.0912},
  "barangay26": {"latitude": 6.9365, "longitude": 122.0756},
  "barangay27": {"latitude": 6.9195, "longitude": 122.0745},
  "barangay28": {"latitude": 6.9215, "longitude": 122.0825},
  "barangay29": {"latitude": 6.9268, "longitude": 122.0745},
  "barangay30": {"latitude": 6.9325, "longitude": 122.0865},
  "barangay31": {"latitude": 6.9285, "longitude": 122.0912},
  "barangay32": {"latitude": 6.9142, "longitude": 122.0692},
  "barangay33": {"latitude": 6.9498, "longitude": 122.0945},
  "barangay34": {"latitude": 6.9352, "longitude": 122.0778},
  "barangay35": {"latitude": 6.9412, "longitude": 122.0825},
  "barangay36": {"latitude": 6.9268, "longitude": 122.0745},
  "barangay37": {"latitude": 6.9325, "longitude": 122.0865},
  "barangay38": {"latitude": 6.8945, "longitude": 122.0525},
  "barangay39": {"latitude": 6.8875, "longitude": 122.0595},
  "barangay40": {"latitude": 6.8825, "longitude": 122.0635},
  "barangay41": {"latitude": 6.8765, "longitude": 122.0695},
  "barangay42": {"latitude": 6.8945, "longitude": 122.0525},
  "barangay43": {"latitude": 6.8875, "longitude": 122.0595},
  "barangay44": {"latitude": 6.8815, "longitude": 122.0645},
  "barangay45": {"latitude": 6.8755, "longitude": 122.0685},
  "barangay46": {"latitude": 6.8925, "longitude": 122.0555},
  "barangay47": {"latitude": 6.8865, "longitude": 122.0625},
  "barangay48": {"latitude": 6.8795, "longitude": 122.0665},
  "barangay49": {"latitude": 6.8945, "longitude": 122.0525},
  "barangay50": {"latitude": 6.8875, "longitude": 122.0595},
  "barangay51": {"latitude": 6.8825, "longitude": 122.0635},
  "barangay52": {"latitude": 6.8745, "longitude": 122.0705},
  "barangay53": {"latitude": 6.8935, "longitude": 122.0545},
  "barangay54": {"latitude": 6.8855, "longitude": 122.0615},
  "barangay55": {"latitude": 6.8805, "longitude": 122.0655},
  "barangay56": {"latitude": 6.8735, "longitude": 122.0725},
  "barangay57": {"latitude": 6.8765, "longitude": 122.0685},
  "barangay58": {"latitude": 6.8925, "longitude": 122.0555},
  "barangay59": {"latitude": 6.8865, "longitude": 122.0625},
  "barangay60": {"latitude": 6.8795, "longitude": 122.0665},
  "barangay61": {"latitude": 6.8945, "longitude": 122.0525},
  "barangay62": {"latitude": 6.8875, "longitude": 122.0595},
  "barangay63": {"latitude": 6.8815, "longitude": 122.0645},
  "barangay64": {"latitude": 6.8755, "longitude": 122.0685},
  "barangay65": {"latitude": 6.8925, "longitude": 122.0555},
  "barangay66": {"latitude": 6.8865, "longitude": 122.0625},
  "barangay67": {"latitude": 6.8805, "longitude": 122.0655},
  "barangay68": {"latitude": 6.8735, "longitude": 122.0725},
  "barangay69": {"latitude": 6.8945, "longitude": 122.0525},
  "barangay70": {"latitude": 6.8875, "longitude": 122.0595},
  "barangay71": {"latitude": 6.8825, "longitude": 122.0635},
  "barangay72": {"latitude": 6.8765, "longitude": 122.0695},
  "barangay73": {"latitude": 6.8735, "longitude": 122.0725},
  "barangay74": {"latitude": 6.8925, "longitude": 122.0555},
  "barangay75": {"latitude": 6.8865, "longitude": 122.0625},
  "barangay76": {"latitude": 6.8805, "longitude": 122.0655},
  "barangay77": {"latitude": 6.8755, "longitude": 122.0685},
  "barangay78": {"latitude": 6.8745, "longitude": 122.0705},
  "barangay79": {"latitude": 6.8935, "longitude": 122.0545},
  "barangay80": {"latitude": 6.8855, "longitude": 122.0615},
  "barangay81": {"latitude": 6.8795, "longitude": 122.0665},
  "barangay82": {"latitude": 6.8945, "longitude": 122.0525},
  "barangay83": {"latitude": 6.8875, "longitude": 122.0595},
  "barangay84": {"latitude": 6.8825, "longitude": 122.0635},
  "barangay85": {"latitude": 6.8765, "longitude": 122.0695},
  "barangay86": {"latitude": 6.8735, "longitude": 122.0725},
  "barangay87": {"latitude": 6.8925, "longitude": 122.0555},
  "barangay88": {"latitude": 6.8865, "longitude": 122.0625},
  "barangay89": {"latitude": 6.8805, "longitude": 122.0655},
  "barangay90": {"latitude": 6.8755, "longitude": 122.0685},
  "barangay91": {"latitude": 6.8945, "longitude": 122.0525},
  "barangay92": {"latitude": 6.8875, "longitude": 122.0595},
  "barangay93": {"latitude": 6.8825, "longitude": 122.0635}
};

// Load barangay data
async function loadBarangayData() {
  try {
    const response = await fetch('./data/barangays.json');
    barangaysData = await response.json();
  } catch (error) {
    console.error('Error loading barangay data:', error);
  }
}

// Initialize district selection
function initDistrictSelection() {
  const district1Btn = document.getElementById('district1-btn');
  const district2Btn = document.getElementById('district2-btn');

  if (district1Btn) {
    district1Btn.addEventListener('click', () => {
      selectDistrict('district1', district1Btn, district2Btn);
    });
  }

  if (district2Btn) {
    district2Btn.addEventListener('click', () => {
      selectDistrict('district2', district2Btn, district1Btn);
    });
  }
}

function selectDistrict(districtId, selectedBtn, otherBtn) {
  // Update button states
  selectedBtn.classList.add('active');
  otherBtn.classList.remove('active');

  // Show barangays for selected district
  const barangaysList = document.getElementById('barangays-list');
  const district = barangaysData.districts.find(d => d.id === districtId);

  if (district) {
    // Store current district for search functionality
    barangaysList.dataset.districtId = districtId;
    barangaysList.dataset.barangays = JSON.stringify(district.barangays);

    let html = `<h3>${district.name} - Barangays</h3>`;
    html += `<div class="search-container">
      <input 
        type="text" 
        id="search-input" 
        class="search-bar" 
        placeholder="🔍 Search barangays by name or hazard..."
        aria-label="Search barangays"
      >
      <div id="search-results-count" class="search-results-count"></div>
    </div>`;
    html += '<div id="barangays-grid" class="card-grid">';

    district.barangays.forEach(barangay => {
      html += `
        <div class="card barangay-card" onclick="viewBarangayDetails('${barangay.id}')" data-barangay-name="${barangay.name.toLowerCase()}" data-hazards="${barangay.hazards.join(' ').toLowerCase()}">
          <span class="card-badge">${district.name}</span>
          <h3>${barangay.name}</h3>
          <p><strong>Population:</strong> ${barangay.population.toLocaleString()}</p>
          <p><strong>Area:</strong> ${barangay.area}</p>
          <div style="background-color: var(--primary-lighter); padding: 1rem; border-radius: 8px; margin-top: 1rem; margin-bottom: 1rem;">
            <p style="margin-bottom: 0.5rem;"><strong>☎️ Hotline:</strong> ${barangay.hotline || 'N/A'}</p>
            <p style="margin-bottom: 0;"><strong>📧 Email:</strong> <a href="mailto:${barangay.email}" style="color: var(--primary-color); text-decoration: none; font-weight: 600;">${barangay.email || 'N/A'}</a></p>
          </div>
          <p style="color: var(--primary-color); font-weight: 600; cursor: pointer;">
            View Hazard Details →
          </p>
        </div>
      `;
    });

    html += '</div>';
    barangaysList.innerHTML = html;
    barangaysList.classList.add('active');

    // Initialize search functionality
    initializeSearch(district.barangays);
  }
}

// Search functionality
function initializeSearch(barangays) {
  const searchInput = document.getElementById('search-input');
  const searchResultsCount = document.getElementById('search-results-count');
  const barangayCards = document.querySelectorAll('.barangay-card');

  if (!searchInput) return;

  searchInput.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase().trim();
    let visibleCount = 0;

    barangayCards.forEach(card => {
      const barangayName = card.dataset.barangayName;
      const hazards = card.dataset.hazards;

      // Search in barangay name and hazards
      const matches = barangayName.includes(searchTerm) || hazards.includes(searchTerm);

      if (searchTerm === '') {
        card.style.display = 'block';
        visibleCount++;
      } else if (matches) {
        card.style.display = 'block';
        visibleCount++;
      } else {
        card.style.display = 'none';
      }
    });

    // Update results count
    if (searchTerm === '') {
      searchResultsCount.textContent = '';
      searchResultsCount.style.display = 'none';
    } else {
      searchResultsCount.textContent = `Found ${visibleCount} result${visibleCount !== 1 ? 's' : ''}`;
      searchResultsCount.style.display = 'block';
    }
  });

  // Clear search on input field focus if needed
  searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Escape') {
      searchInput.value = '';
      searchInput.dispatchEvent(new Event('input'));
    }
  });
}

// View barangay details
function viewBarangayDetails(barangayId) {
  // Find barangay from all districts
  let selectedBarangay = null;
  for (let district of barangaysData.districts) {
    selectedBarangay = district.barangays.find(b => b.id === barangayId);
    if (selectedBarangay) break;
  }

  if (selectedBarangay) {
    // Store in session storage and navigate
    sessionStorage.setItem('selectedBarangay', JSON.stringify(selectedBarangay));
    window.location.href = 'barangay-detail.html';
  }
}

// Load and display barangay details on detail page
function loadBarangayDetails() {
  const barangay = JSON.parse(sessionStorage.getItem('selectedBarangay'));

  if (!barangay) {
    document.body.innerHTML = '<main><p style="text-align: center; padding: 2rem;">No barangay selected.</p></main>';
    return;
  }

  const headerDiv = document.querySelector('.barangay-header');
  if (headerDiv) {
    headerDiv.innerHTML = `
      <h1>${barangay.name}</h1>
      <p>District: ${barangay.district}</p>
    `;
  }

  // Initialize map if coordinates are available from JSON data
  if (barangay.latitude && barangay.longitude) {
    initializeBarangayMap(barangay);
  }

  const detailsDiv = document.querySelector('.detail-grid');
  if (detailsDiv) {
    let hazardsHtml = '<ul>';
    barangay.hazards.forEach(hazard => {
      hazardsHtml += `<li>${hazard}</li>`;
    });
    hazardsHtml += '</ul>';

    detailsDiv.innerHTML = `
      <div class="detail-box">
        <h4>📍 Location Information</h4>
        <ul>
          <li><strong>Barangay:</strong> ${barangay.name}</li>
          <li><strong>District:</strong> ${barangay.district}</li>
          <li><strong>Area:</strong> ${barangay.area}</li>
          <li><strong>Population:</strong> ${barangay.population.toLocaleString()}</li>
        </ul>
      </div>

      <div class="detail-box">
        <h4>⚠️ Hazard Information</h4>
        ${hazardsHtml}
      </div>

      <div class="detail-box">
        <h4>📋 Recommendations</h4>
        <ul>
          <li>Stay informed during hazard seasons</li>
          <li>Prepare an emergency evacuation plan</li>
          <li>Keep emergency supplies ready</li>
          <li>Follow local government advisories</li>
          <li>Participate in community drills</li>
        </ul>
      </div>

      <div class="detail-box">
        <h4>☎️ Contact Information</h4>
        <ul>
          <li><strong>Hotline:</strong> ${barangay.hotline}</li>
          <li><strong>Email:</strong> <a href="mailto:${barangay.email}">${barangay.email}</a></li>
        </ul>
      </div>
    `;
  }

  // Add back button
  const backBtn = document.querySelector('.back-btn');
  if (backBtn) {
    backBtn.addEventListener('click', () => {
      sessionStorage.removeItem('selectedBarangay');
      window.location.href = 'list-of-barangays.html';
    });
  }
}

// Initialize Google Map for barangay
function initializeBarangayMap(barangay) {
  // Wait for Google Maps API to load
  if (typeof google === 'undefined' || !google.maps) {
    // Retry after a short delay if Maps API not loaded yet
    setTimeout(() => initializeBarangayMap(barangay), 500);
    return;
  }

  const mapElement = document.getElementById('barangay-map');
  if (!mapElement) return;

  const barangayLocation = {
    lat: barangay.latitude,
    lng: barangay.longitude
  };

  const map = new google.maps.Map(mapElement, {
    zoom: 14,
    center: barangayLocation,
    mapTypeControl: true,
    fullscreenControl: true,
    streetViewControl: true,
    styles: [
      {
        featureType: 'all',
        elementType: 'labels.text.fill',
        stylers: [{ color: '#333333' }]
      },
      {
        featureType: 'water',
        elementType: 'geometry.fill',
        stylers: [{ color: '#b3d9ff' }]
      }
    ]
  });

  // Add marker for barangay
  const marker = new google.maps.Marker({
    position: barangayLocation,
    map: map,
    title: barangay.name,
    icon: {
      path: google.maps.SymbolPath.CIRCLE,
      scale: 10,
      fillColor: '#3B7228',
      fillOpacity: 1,
      strokeColor: '#ffffff',
      strokeWeight: 2
    }
  });

  // Add info window to marker
  const infoWindow = new google.maps.InfoWindow({
    content: `
      <div style="font-family: Arial, sans-serif; width: 250px;">
        <h3 style="margin: 0 0 10px 0; color: #3B7228; font-size: 16px;">${barangay.name}</h3>
        <p style="margin: 5px 0; font-size: 13px;">
          <strong>District:</strong> ${barangay.district}
        </p>
        <p style="margin: 5px 0; font-size: 13px;">
          <strong>Population:</strong> ${barangay.population.toLocaleString()}
        </p>
        <p style="margin: 5px 0; font-size: 13px;">
          <strong>Area:</strong> ${barangay.area}
        </p>
        <p style="margin: 5px 0; font-size: 12px; color: #666;">
          <strong>📍 Coordinates:</strong> ${barangay.latitude.toFixed(4)}, ${barangay.longitude.toFixed(4)}
        </p>
      </div>
    `,
    maxWidth: 300
  });

  // Show info window on marker click
  marker.addListener('click', () => {
    infoWindow.open(map, marker);
  });

  // Open info window by default
  infoWindow.open(map, marker);
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', () => {
  loadBarangayData();
  initDistrictSelection();
});
